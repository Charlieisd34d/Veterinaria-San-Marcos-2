import { beforeEach, describe, expect, it } from 'vitest';
import {
  listarClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from './clienteService';

beforeEach(() => {
  localStorage.clear();
});

describe('clienteService', () => {
  it('lista clientes iniciales', () => {
    const clientes = listarClientes();

    expect(Array.isArray(clientes)).toBe(true);
    expect(clientes.length).toBeGreaterThan(0);
  });

  it('crea un cliente con id nuevo', () => {
    const nuevo = crearCliente({ nombre: 'María Pino', correo: 'maria@test.cl' });

    expect(nuevo).toMatchObject({ nombre: 'María Pino', correo: 'maria@test.cl' });
    expect(nuevo.id).toBeGreaterThan(0);
  });

  it('actualiza y elimina un cliente', () => {
    const creado = crearCliente({ nombre: 'Luis', correo: 'luis@test.cl' });
    const actualizado = actualizarCliente(creado.id, { nombre: 'Luis Gómez' });
    eliminarCliente(creado.id);

    expect(actualizado).toMatchObject({ id: creado.id, nombre: 'Luis Gómez' });
    expect(listarClientes().some((item) => item.id === creado.id)).toBe(false);
  });
});
