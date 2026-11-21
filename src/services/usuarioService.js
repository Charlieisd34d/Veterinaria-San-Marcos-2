import usuariosIniciales from "../data/admin/usuariosIniciales.json";

<<<<<<< HEAD
const CLAVE = "usuario";
=======
const CLAVE = "usuarios";
>>>>>>> origin/backup/admin-fix-24-10-2026

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(usuariosIniciales));
<<<<<<< HEAD
    return [...productosIniciales];
=======
    return [...usuariosIniciales];
>>>>>>> origin/backup/admin-fix-24-10-2026
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
<<<<<<< HEAD
  return leer().find((p) => p.id === id) ?? null;
=======
  return leer().find((usuario) => usuario.id === id) ?? null;
>>>>>>> origin/backup/admin-fix-24-10-2026
}

export function crearUsuario(datos) {
  const lista = leer();
<<<<<<< HEAD
  const nuevoId = Math.max(0, ...lista.map((p) => p.id)) + 1;
=======
  const nuevoId = Math.max(0, ...lista.map((usuario) => usuario.id)) + 1;
>>>>>>> origin/backup/admin-fix-24-10-2026
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarUsuario(id, cambios) {
<<<<<<< HEAD
  const lista = leer().map((p) => (p.id === id ? { ...p, ...cambios } : p));
  guardar(lista);
  return lista.find((p) => p.id === id) ?? null;
}

export function eliminarEliminar(id) {
  guardar(leer().filter((p) => p.id !== id));
=======
  const lista = leer().map((usuario) => (usuario.id === id ? { ...usuario, ...cambios } : usuario));
  guardar(lista);
  return lista.find((usuario) => usuario.id === id) ?? null;
}

export function eliminarUsuario(id) {
  guardar(leer().filter((usuario) => usuario.id !== id));
>>>>>>> origin/backup/admin-fix-24-10-2026
}