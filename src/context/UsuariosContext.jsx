import { createContext, useContext, useEffect, useState } from "react";
import * as usuarioService from "../services/usuarioService";

const UsuariosContext = createContext(null);

export function UsuariosProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  async function cargarUsuarios() {
    setCargando(true);
    setError(null);
    try {
      const lista = await usuarioService.obtenerUsuariosApi();
      setUsuarios(lista);
    } catch (err) {
      setError(err?.response?.data?.error || "No se pudo conectar con la API de usuarios");
      setUsuarios(usuarioService.listarUsuarios());
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarUsuarios();
  }, []);

  async function crear(datos) {
    try {
      await usuarioService.registrarUsuarioApi(datos);
      await cargarUsuarios();
    } catch (err) {
      setError(err?.response?.data?.error || "Error al crear usuario");
      throw err;
    }
  }

  async function actualizar(id, cambios) {
    try {
      await usuarioService.actualizarUsuarioApi(id, cambios);
      await cargarUsuarios();
    } catch (err) {
      setError(err?.response?.data?.error || "Error al actualizar usuario");
      throw err;
    }
  }

  async function eliminar(id) {
    try {
      await usuarioService.desactivarUsuarioApi(id);
      await cargarUsuarios();
    } catch (err) {
      setError(err?.response?.data?.error || "Error al desactivar usuario");
      throw err;
    }
  }

  return (
    <UsuariosContext.Provider
      value={{ usuarios, cargando, error, recargar: cargarUsuarios, crear, actualizar, eliminar }}
    >
      {children}
    </UsuariosContext.Provider>
  );
}

export function useUsuarios() {
  const contexto = useContext(UsuariosContext);
  if (!contexto) {
    throw new Error("useusuario debe usarse dentro de un UsuariosProvider");
  }
  return contexto;
}
