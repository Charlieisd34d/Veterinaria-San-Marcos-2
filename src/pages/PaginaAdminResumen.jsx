import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";
import { useSolicitudesAdministrativas } from "../hooks/useSolicitudesAdministrativas";
import { useCategorias } from "../context/CategoriasContext";
import { useClientes } from "../context/ClientesContext";
import { filtrarClientesRegistrados } from "../services/clienteService";
import { listarUsuarios } from "../services/usuarioService";
import { cerrarSesion, obtenerTokenAdmin } from "../utils/autenticacion";
import { filtrarCriticos } from "../utils/stock";

import resumen from "../data/admin/resumen.json";
import criticos from "../data/admin/criticosConfig.json";

function PaginaAdminResumen() {
  const navigate = useNavigate();
  const { productos } = useProductos();
  const { filas: solicitudes, error: errorSolicitudes } = useSolicitudesAdministrativas();
  const datosCategorias = useCategorias();
  const datosClientes = useClientes();
  const token = obtenerTokenAdmin();
  const [totalesCuentas, setTotalesCuentas] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  useTituloPagina("Admin · Resumen");

  useEffect(() => {
    const peticion = new AbortController();

    async function cargarTotalUsuarios() {
      try {
        const usuarios = await listarUsuarios(token, peticion.signal);
        if (peticion.signal.aborted) return;
        if (!Array.isArray(usuarios)) throw new Error("Respuesta inesperada");
        setTotalesCuentas({
          usuarios: usuarios.length,
          clientes: usuarios.filter(({ rol }) => rol === "CLIENTE").length,
        });
      } catch (fallo) {
        if (peticion.signal.aborted) return;
        if (fallo.response?.status === 401) {
          cerrarSesion();
          navigate("/iniciar-sesion", { replace: true });
          return;
        }
        setTotalesCuentas(null);
        setMensaje({ texto: "No se pudieron consultar las cuentas registradas.", variante: "danger" });
      }
    }

    cargarTotalUsuarios();
    return () => peticion.abort();
  }, [navigate, token]);

  const totales = {
    solicitudes: errorSolicitudes ? "—" : solicitudes.length,
    productos: productos.length,
    criticos: filtrarCriticos(productos, criticos.umbral).length,
    categorias: datosCategorias.categorias.length,
    clientes: filtrarClientesRegistrados(datosClientes.clientes).length,
    usuarios: totalesCuentas?.usuarios ?? "—",
    cuentasClientes: totalesCuentas?.clientes ?? "—",
  };

  return (
    <PlantillaAdmin mensaje={mensaje} onCerrarMensaje={() => setMensaje(null)}>
      {errorSolicitudes && <div className="alert alert-danger" role="alert">{errorSolicitudes}</div>}
      <PanelResumen
        titulo={resumen.titulo}
        descripcion={resumen.descripcion}
        tarjetas={resumen.tarjetas}
        totales={totales}
        textoIr={resumen.textoIr}
        onIr={navigate}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminResumen;