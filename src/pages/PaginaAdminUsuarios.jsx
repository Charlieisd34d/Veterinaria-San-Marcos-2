import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { crearActualizacionUsuarioDto, crearRegistroUsuarioDto } from "../dto/usuarioDto";
import { registrarUsuario } from "../services/authService";
import { actualizarUsuario, desactivarUsuario, listarUsuarios } from "../services/usuarioService";
import { cerrarSesion, obtenerTokenAdmin } from "../utils/autenticacion";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/usuariosConfig.json";

const campoPassword = { id: "password", etiqueta: "Contraseña", tipo: "password", minLength: 8 };
const textosUsuarios = { ...textos, eliminar: "Desactivar" };

function presentarUsuarios(usuarios) {
  return usuarios.map((usuario) => ({
    ...usuario,
    estado: usuario.activo ? "Activo" : "Inactivo",
  }));
}

function PaginaAdminUsuarios() {
  const navigate = useNavigate();
  const token = obtenerTokenAdmin();
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const [errorFormulario, setErrorFormulario] = useState("");
  const [cargando, setCargando] = useState(true);
  const [operando, setOperando] = useState(false);

  useTituloPagina("Admin · Usuarios");

  useEffect(() => {
    const peticion = new AbortController();

    async function cargarUsuarios() {
      try {
        const lista = await listarUsuarios(token, peticion.signal);
        if (peticion.signal.aborted) return;
        if (!Array.isArray(lista)) throw new Error("Respuesta inesperada");
        setUsuarios(lista);
      } catch (fallo) {
        if (peticion.signal.aborted) return;
        if (fallo.response?.status === 401) {
          cerrarSesion();
          navigate("/iniciar-sesion", { replace: true });
          return;
        }
        setMensaje({ texto: "No se pudo cargar la lista de usuarios.", variante: "danger" });
      } finally {
        if (!peticion.signal.aborted) setCargando(false);
      }
    }

    cargarUsuarios();
    return () => peticion.abort();
  }, [navigate, token]);

  function abrirFormulario(usuario) {
    setErrorFormulario("");
    setEditando(usuario);
  }

  function manejarError(fallo, mostrarError, texto) {
    if (fallo.response?.status === 401) {
      cerrarSesion();
      navigate("/iniciar-sesion", { replace: true });
      return;
    }
    mostrarError(fallo.response?.data?.mensaje ?? texto);
  }

  async function guardar(valores) {
    if (!editando || operando) return;

    const id = editando.id;
    setOperando(true);
    setErrorFormulario("");
    setMensaje(null);

    try {
      if (id == null) {
        const usuario = await registrarUsuario(crearRegistroUsuarioDto(valores));
        setUsuarios((lista) => [...lista, usuario]);
      } else {
        const usuario = await actualizarUsuario(id, crearActualizacionUsuarioDto(valores), token);
        setUsuarios((lista) => lista.map((fila) => fila.id === id ? usuario : fila));
      }
      setMensaje(id == null ? textos.mensajes.creado : textos.mensajes.actualizado);
      setEditando(null);
    } catch (fallo) {
      manejarError(fallo, setErrorFormulario, "No se pudo guardar el usuario.");
    } finally {
      setOperando(false);
    }
  }

  async function desactivar(id) {
    if (operando) return;

    setOperando(true);
    setMensaje(null);
    try {
      await desactivarUsuario(id, token);
      setUsuarios((lista) => lista.map((fila) => fila.id === id ? { ...fila, activo: false } : fila));
      setMensaje({ texto: "Usuario desactivado.", variante: "success" });
    } catch (fallo) {
      manejarError(fallo, (texto) => setMensaje({ texto, variante: "danger" }), "No se pudo desactivar el usuario.");
    } finally {
      setOperando(false);
    }
  }

  const configFormulario = editando?.id == null
    ? { ...config, campos: [...config.campos, campoPassword] }
    : config;

  return (
    <PlantillaAdmin mensaje={mensaje} onCerrarMensaje={() => setMensaje(null)}>
      <SeccionCrud
        config={configFormulario}
        textos={textosUsuarios}
        filas={presentarUsuarios(usuarios)}
        editando={editando}
        ocupado={cargando || operando}
        textoVacio={cargando ? "Cargando usuarios…" : textos.vacio}
        errorFormulario={errorFormulario}
        onNuevo={() => abrirFormulario({})}
        onEditar={abrirFormulario}
        puedeEliminar={(usuario) => usuario.activo}
        onEliminar={desactivar}
        onGuardar={guardar}
        onCancelar={() => abrirFormulario(null)}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminUsuarios;
