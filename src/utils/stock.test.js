import { describe, expect, it } from 'vitest';
import { filtrarCriticos } from './stock';

describe('stock util', () => {
  it('devuelve solo productos con stock bajo el umbral', () => {
    const productos = [
      { id: 1, stock: 5, nombre: 'Pasta Dental' },
      { id: 2, stock: 12, nombre: 'Juguete' },
      { id: 3, stock: 3, nombre: 'Antipulgas' },
    ];

    expect(filtrarCriticos(productos, 5)).toEqual([
      { id: 1, stock: 5, nombre: 'Pasta Dental' },
      { id: 3, stock: 3, nombre: 'Antipulgas' },
    ]);
  });
});
