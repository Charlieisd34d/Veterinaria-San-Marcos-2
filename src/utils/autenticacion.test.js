import { beforeEach, describe, expect, it } from 'vitest';
import { validarCredenciales, guardarSesion, estaAutenticado, cerrarSesion } from './autenticacion';

beforeEach(() => {
  localStorage.clear();
});

describe('autenticacion', () => {
  it('valida credenciales correctas', () => {
    const usuario = validarCredenciales('ana@veterinaria.cl', 'admin123');

    expect(usuario).toMatchObject({ correo: 'ana@veterinaria.cl', rol: 'admin' });
  });

  it('rechaza credenciales incorrectas', () => {
    const usuario = validarCredenciales('ana@veterinaria.cl', 'clave-mala');

    expect(usuario).toBeNull();
  });

  it('detecta sesión activa', () => {
    guardarSesion({ id: 1, nombre: 'Ana', correo: 'ana@veterinaria.cl', rol: 'admin' });

    expect(estaAutenticado()).toBe(true);
  });

  it('cierra sesión eliminando el usuario autenticado', () => {
    guardarSesion({ id: 1, nombre: 'Ana', correo: 'ana@veterinaria.cl', rol: 'admin' });
    cerrarSesion();

    expect(estaAutenticado()).toBe(false);
  });
});
