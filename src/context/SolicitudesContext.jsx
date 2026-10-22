import { createContext, useContext, useState } from "react";
import * as solicitudesService from "../services/solicitudesService";

const SolicitudesContext = createContext(null);

export function SolicitudesProvider({ children }) {
  const [solicitudes, setSolicitudes] = useState(() => solicitudesService.listarSolicitudes());

  function crear(datos) {
    solicitudesService.crearSolicitud(datos);
    setSolicitudes(solicitudesService.listarSolicitudes());
  }

  function actualizar(id, cambios) {
    solicitudesService.actualizarSolicitud(id, cambios);
    setSolicitudes(solicitudesService.listarSolicitudes());
  }

  function eliminar(id) {
    solicitudesService.eliminarSolicitud(id);
    setSolicitudes(solicitudesService.listarSolicitudes());
  }

  return (
    <SolicitudesContext.Provider value={{ solicitudes, crear, actualizar, eliminar }}>
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