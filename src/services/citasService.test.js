import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { cerrarSesion, guardarSesion } from '../utils/autenticacion';
import { guardarCita, obtenerCitas } from './citasService';

const clave = 'citas_veterinaria_san_marcos';
const correo = 'contacto@ejemplo.cl';

function iniciarSesion(id, rol = 'CLIENTE') {
  guardarSesion({ token: 'jwt-de-prueba', usuario: { id, rol, correo } });
}

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

it('asocia las citas a la sesión y separa cuentas aunque compartan el correo de contacto', () => {
  localStorage.setItem(clave, JSON.stringify([{ id: 'anterior', correo }]));
  iniciarSesion(1);
  const cita = guardarCita({ correo, usuarioId: 2 }, '1');
  expect(cita).toMatchObject({ usuarioId: 1, correo });
  expect(obtenerCitas()).toEqual([cita]);

  cerrarSesion();
  expect(obtenerCitas()).toEqual([]);
  iniciarSesion(2);
  expect(obtenerCitas()).toEqual([]);
  expect(() => guardarCita({ correo }, '1')).toThrow();

  iniciarSesion(1);
  expect(obtenerCitas()).toEqual([cita]);
  expect(JSON.parse(localStorage.getItem(clave))).toEqual([{ id: 'anterior', correo }]);
});

it('rechaza a visitantes, administradores y clientes sin id', () => {
  expect(() => guardarCita({ correo }, '1')).toThrow();
  iniciarSesion(1, 'ADMIN');
  expect(() => guardarCita({ correo }, '1')).toThrow();
  expect(obtenerCitas()).toEqual([]);
  iniciarSesion(undefined);
  expect(() => guardarCita({ correo }, '1')).toThrow();
  expect(localStorage.getItem(`${clave}:1`)).toBeNull();
});

it('propaga los fallos de escritura sin perder las citas guardadas', () => {
  iniciarSesion(1);
  const cita = guardarCita({ correo }, '1');
  vi.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
    throw new DOMException('Cuota agotada', 'QuotaExceededError');
  });

  expect(() => guardarCita({ correo }, '1')).toThrow();
  expect(obtenerCitas()).toEqual([cita]);
});

it('conserva los datos locales si la lectura falla', () => {
  iniciarSesion(1);
  localStorage.setItem(`${clave}:1`, '{incompleto');
  expect(() => obtenerCitas()).toThrow();
  expect(() => guardarCita({ correo }, '1')).toThrow();
  expect(localStorage.getItem(`${clave}:1`)).toBe('{incompleto');
});
