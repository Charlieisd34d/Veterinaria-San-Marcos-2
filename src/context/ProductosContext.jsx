<<<<<<< HEAD
import { createContext, useContext, useState } from "react";
import * as productoService from "../services/productoService";
=======
import { createContext, useContext, useState } from 'react';
import * as productoService from '../services/productoService';
>>>>>>> origin/backup/admin-fix-24-10-2026

const ProductosContext = createContext(null);

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState(() => productoService.listarProductos());

  function crear(datos) {
    productoService.crearProducto(datos);
    setProductos(productoService.listarProductos());
  }

  function actualizar(id, cambios) {
    productoService.actualizarProducto(id, cambios);
    setProductos(productoService.listarProductos());
  }

  function eliminar(id) {
    productoService.eliminarProducto(id);
    setProductos(productoService.listarProductos());
  }

<<<<<<< HEAD
  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar }}>
=======
  function recargar() {
    setProductos(productoService.listarProductos());
  }

  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar, recargar }}>
>>>>>>> origin/backup/admin-fix-24-10-2026
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  const contexto = useContext(ProductosContext);
  if (!contexto) {
<<<<<<< HEAD
    throw new Error("useProductos debe usarse dentro de un ProductosProvider");
=======
    throw new Error('useProductos debe usarse dentro de un ProductosProvider');
>>>>>>> origin/backup/admin-fix-24-10-2026
  }
  return contexto;
}