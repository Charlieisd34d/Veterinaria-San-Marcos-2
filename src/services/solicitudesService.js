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

export function obtenerSolicitude(id) {
  return leer().find((p) => p.id === id) ?? null;
}

export function crearSolicitud(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((p) => p.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarSolicitud(id, cambios) {
  const lista = leer().map((p) => (p.id === id ? { ...p, ...cambios } : p));
  guardar(lista);
  return lista.find((p) => p.id === id) ?? null;
}

export function eliminarSolicitud(id) {
  guardar(leer().filter((p) => p.id !== id));
}