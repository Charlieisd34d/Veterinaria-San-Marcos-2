import { createContext, useContext, useEffect, useState } from "react";
import * as solicitudesService from "../services/solicitudesService";

const SolicitudesContext = createContext(null);

export function SolicitudesProvider({ children }) {
  const [solicitudes, setSolicitudes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  async function cargarSolicitudes() {
    setCargando(true);
    setError(null);
    try {
      const lista = await solicitudesService.obtenerSolicitudesApi();
      setSolicitudes(lista);
    } catch (err) {
      setError(err?.response?.data?.error || "No se pudo conectar con la API de solicitudes");
      setSolicitudes(solicitudesService.listarSolicitudes());
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  async function crear(datos) {
    try {
      const creada = await solicitudesService.crearSolicitudApi(datos);
      await cargarSolicitudes();
      return creada;
    } catch (err) {
      const msg = err?.response?.data?.error || "Error al registrar pedido en el servidor";
      setError(msg);
      throw err;
    }
  }

  async function actualizar(id, cambios) {
    try {
      await solicitudesService.actualizarSolicitudApi(id, cambios);
      await cargarSolicitudes();
    } catch (err) {
      setError(err?.response?.data?.error || "Error al actualizar solicitud");
      throw err;
    }
  }

  async function eliminar(id) {
    try {
      await solicitudesService.eliminarSolicitudApi(id);
      await cargarSolicitudes();
    } catch (err) {
      setError(err?.response?.data?.error || "Error al eliminar solicitud");
      throw err;
    }
  }

  return (
    <SolicitudesContext.Provider
      value={{ solicitudes, cargando, error, recargar: cargarSolicitudes, crear, actualizar, eliminar }}
    >
      {children}
    </SolicitudesContext.Provider>
  );
}

export function useSolicitudes() {
  const contexto = useContext(SolicitudesContext);
  if (!contexto) {
    throw new Error("useSolicitudes debe usarse dentro de un SolicitudesProvider");
  }
  return contexto;
}
