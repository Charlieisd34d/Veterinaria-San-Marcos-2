import usuariosIniciales from "../data/admin/usuariosIniciales.json";

const CLAVE = "usuarios";

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(usuariosIniciales));
    return [...usuariosIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarUsuarios() {
  return leer();
}

export function obtenerUsuario(id) {
  return leer().find((usuario) => usuario.id === id) ?? null;
}

export function crearUsuario(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((usuario) => usuario.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarUsuario(id, cambios) {
  const lista = leer().map((usuario) => (usuario.id === id ? { ...usuario, ...cambios } : usuario));
  guardar(lista);
  return lista.find((usuario) => usuario.id === id) ?? null;
}

export function eliminarUsuario(id) {
  guardar(leer().filter((usuario) => usuario.id !== id));
}