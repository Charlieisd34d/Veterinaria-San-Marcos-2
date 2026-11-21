<<<<<<< HEAD
import productosIniciales from "../data/admin/productosIniciales.json";

const CLAVE = "productos";
=======
import productosIniciales from '../data/productos.json';

const CLAVE = 'productos';
>>>>>>> origin/backup/admin-fix-24-10-2026

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(productosIniciales));
    return [...productosIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarProductos() {
  return leer();
}

export function obtenerProducto(id) {
  return leer().find((p) => p.id === id) ?? null;
}

export function crearProducto(datos) {
  const lista = leer();
<<<<<<< HEAD
  const nuevoId = Math.max(0, ...lista.map((p) => p.id)) + 1;
=======
  const ids = lista
    .map((p) => Number(p.id))
    .filter((id) => Number.isFinite(id));
  const nuevoId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
>>>>>>> origin/backup/admin-fix-24-10-2026
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarProducto(id, cambios) {
  const lista = leer().map((p) => (p.id === id ? { ...p, ...cambios } : p));
  guardar(lista);
  return lista.find((p) => p.id === id) ?? null;
}

export function eliminarProducto(id) {
  guardar(leer().filter((p) => p.id !== id));
}