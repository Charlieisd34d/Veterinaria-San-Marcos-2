import { beforeEach, describe, expect, it } from 'vitest';
import {
  listarProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from './productoService';

beforeEach(() => {
  localStorage.clear();
});

describe('productoService', () => {
  it('lista productos iniciales', () => {
    const productos = listarProductos();

    expect(Array.isArray(productos)).toBe(true);
    expect(productos.length).toBeGreaterThan(0);
  });

  it('crea un producto con id valido', () => {
    const creado = crearProducto({ nombre: 'Collar anti pulgas', stock: 10, precio: 25000 });

    expect(creado).toMatchObject({ nombre: 'Collar anti pulgas', stock: 10, precio: 25000 });
    expect(creado.id).toBeGreaterThan(0);
  });

  it('actualiza y elimina un producto', () => {
    const creado = crearProducto({ nombre: 'Shampoo', stock: 8, precio: 12000 });
    const actualizado = actualizarProducto(creado.id, { stock: 15 });
    eliminarProducto(creado.id);

    expect(actualizado).toMatchObject({ id: creado.id, stock: 15 });
    expect(listarProductos().some((item) => item.id === creado.id)).toBe(false);
  });
});
