import { beforeEach, describe, expect, it } from 'vitest';
import {
  listarCategorias,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
} from './categoriaService';

beforeEach(() => {
  localStorage.clear();
});

describe('categoriaService', () => {
  it('lista categorias iniciales', () => {
    const categorias = listarCategorias();

    expect(Array.isArray(categorias)).toBe(true);
    expect(categorias.length).toBeGreaterThan(0);
  });

  it('crea una categoria con id incremental', () => {
    const nueva = crearCategoria({ nombre: 'Medicamentos' });

    expect(nueva).toMatchObject({ nombre: 'Medicamentos' });
    expect(nueva.id).toBeGreaterThan(0);
  });

  it('actualiza y elimina una categoria', () => {
    const creada = crearCategoria({ nombre: 'Limpieza' });
    const actualizada = actualizarCategoria(creada.id, { nombre: 'Limpieza premium' });
    eliminarCategoria(creada.id);

    expect(actualizada).toMatchObject({ id: creada.id, nombre: 'Limpieza premium' });
    expect(listarCategorias().some((item) => item.id === creada.id)).toBe(false);
  });
});
