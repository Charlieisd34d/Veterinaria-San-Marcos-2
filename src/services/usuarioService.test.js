import { beforeEach, describe, expect, it } from 'vitest';
import {
  listarUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from './usuarioService';

beforeEach(() => {
  localStorage.clear();
});

describe('usuarioService', () => {
  it('lista usuarios iniciales', () => {
    const usuarios = listarUsuarios();

    expect(Array.isArray(usuarios)).toBe(true);
    expect(usuarios.length).toBeGreaterThan(0);
  });

  it('crea un usuario con id nuevo', () => {
    const usuario = crearUsuario({ nombre: 'Sofía', correo: 'sofia@test.cl', rol: 'admin' });

    expect(usuario).toMatchObject({ nombre: 'Sofía', correo: 'sofia@test.cl', rol: 'admin' });
    expect(usuario.id).toBeGreaterThan(0);
  });

  it('actualiza y elimina un usuario', () => {
    const usuario = crearUsuario({ nombre: 'Pedro', correo: 'pedro@test.cl', rol: 'admin' });
    const actualizado = actualizarUsuario(usuario.id, { nombre: 'Pedro Ruiz' });
    eliminarUsuario(usuario.id);

    expect(actualizado).toMatchObject({ id: usuario.id, nombre: 'Pedro Ruiz' });
    expect(listarUsuarios().some((item) => item.id === usuario.id)).toBe(false);
  });
});
