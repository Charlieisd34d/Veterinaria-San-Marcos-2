import solicitudesIniciales from "../data/admin/solicitudesIniciales.json";

const CLAVE = "solicitudes";

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(solicitudesIniciales));
    return [...solicitudesIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarSolicitudes() {
  return leer();
}

export function obtenerSolicitud(id) {
  return leer().find((solicitud) => solicitud.id === id) ?? null;
}

export function crearSolicitud(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((solicitud) => solicitud.id)) + 1;
  const nuevaSolicitud = { ...datos, id: nuevoId };
  guardar([...lista, nuevaSolicitud]);
  return nuevaSolicitud;
}

export function actualizarSolicitud(id, cambios) {
  const lista = leer().map((solicitud) =>
    solicitud.id === id ? { ...solicitud, ...cambios } : solicitud,
  );
  guardar(lista);
  return lista.find((solicitud) => solicitud.id === id) ?? null;
}

export function eliminarSolicitud(id) {
  guardar(leer().filter((solicitud) => solicitud.id !== id));
}