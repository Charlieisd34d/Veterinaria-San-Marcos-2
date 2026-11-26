import { act, renderHook } from '@testing-library/react';
import { beforeEach, expect, it } from 'vitest';
import { listarSolicitudes } from '../services/solicitudesService';
import { SolicitudesProvider, useSolicitudes } from './SolicitudesContext';

beforeEach(() => localStorage.clear());

it('elimina una solicitud del almacenamiento y actualiza el estado del proveedor', () => {
  const pedido = { id: 1, servicio: 'Pedido Tienda', estado: 'Pendiente' };
  localStorage.setItem('solicitudes', JSON.stringify([pedido]));
  const { result } = renderHook(useSolicitudes, { wrapper: SolicitudesProvider });

  expect(result.current.solicitudes).toEqual([pedido]);
  act(() => result.current.eliminar(pedido.id));

  expect(listarSolicitudes()).toEqual([]);
  expect(result.current.solicitudes).toEqual([]);
});
