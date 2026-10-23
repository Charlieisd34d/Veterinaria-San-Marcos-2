import clientesIniciales from "../data/admin/clientesIniciales.json";

const CLAVE = "clientes";

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(clientesIniciales));
    return [...clientesIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarClientes() {
  return leer();
}

export function obtenerCliente(id) {
  return leer().find((p) => p.id === id) ?? null;
}

export function crearCliente(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((p) => p.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarCliente(id, cambios) {
  const lista = leer().map((p) => (p.id === id ? { ...p, ...cambios } : p));
  guardar(lista);
  return lista.find((p) => p.id === id) ?? null;
}

export function eliminarCliente(id) {
  guardar(leer().filter((p) => p.id !== id));
}