import { beforeEach, describe, expect, it } from 'vitest';
import {
  listarSolicitudes,
  crearSolicitud,
  actualizarSolicitud,
  eliminarSolicitud,
} from './solicitudesService';

beforeEach(() => {
  localStorage.clear();
});

describe('solicitudesService', () => {
  it('lista solicitudes iniciales', () => {
    const solicitudes = listarSolicitudes();

    expect(Array.isArray(solicitudes)).toBe(true);
    expect(solicitudes.length).toBeGreaterThan(0);
  });

  it('crea una solicitud con id nuevo', () => {
    const nueva = crearSolicitud({ clienteId: 1, estado: 'Pendiente' });

    expect(nueva).toMatchObject({ clienteId: 1, estado: 'Pendiente' });
    expect(nueva.id).toBeGreaterThan(0);
  });

  it('actualiza y elimina una solicitud', () => {
    const creada = crearSolicitud({ clienteId: 2, estado: 'Pendiente' });
    const actualizada = actualizarSolicitud(creada.id, { estado: 'Confirmada' });
    eliminarSolicitud(creada.id);

    expect(actualizada).toMatchObject({ id: creada.id, estado: 'Confirmada' });
    expect(listarSolicitudes().some((item) => item.id === creada.id)).toBe(false);
  });
});
