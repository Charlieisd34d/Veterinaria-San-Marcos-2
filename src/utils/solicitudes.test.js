import { describe, expect, it } from 'vitest';
import { agregarNombreCliente, filtrarPorCliente, contarPorEstado } from './solicitudes';

describe('solicitudes util', () => {
  it('agrega el nombre del cliente a cada solicitud', () => {
    const solicitudes = [{ id: 1, clienteId: 2, estado: 'Pendiente' }];
    const clientes = [{ id: 2, nombre: 'Carlos Rojas' }];

    expect(agregarNombreCliente(solicitudes, clientes)).toEqual([
      { id: 1, clienteId: 2, estado: 'Pendiente', cliente: 'Carlos Rojas' },
    ]);
  });

  it('filtra por cliente indicado', () => {
    const solicitudes = [
      { id: 1, clienteId: 2, estado: 'Pendiente' },
      { id: 2, clienteId: 3, estado: 'Confirmada' },
      { id: 3, clienteId: 2, estado: 'Completada' },
    ];

    expect(filtrarPorCliente(solicitudes, 2)).toHaveLength(2);
  });

  it('cuenta solicitudes por estado', () => {
    const solicitudes = [
      { id: 1, estado: 'Pendiente' },
      { id: 2, estado: 'Pendiente' },
      { id: 3, estado: 'Confirmada' },
    ];

    expect(contarPorEstado(solicitudes, 'Pendiente')).toBe(2);
  });
});
