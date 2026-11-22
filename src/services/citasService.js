import { obtenerClienteCitas } from '../utils/clienteCitas';

const CLAVE_CITAS = 'citas_veterinaria_san_marcos';

function leerCitasCliente(clienteId) {
  const clave = `${CLAVE_CITAS}:${clienteId}`;
  const contenido = localStorage.getItem(clave);
  const citas = contenido === null ? [] : JSON.parse(contenido);
  if (!Array.isArray(citas)) throw new Error('El historial local de citas tiene un formato inválido.');

  return { clave, citas };
}

function generarIdCita() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function obtenerCitas() {
  const cliente = obtenerClienteCitas();
  if (!cliente) return [];

  const clienteId = String(cliente.id);
  const { citas } = leerCitasCliente(clienteId);
  return citas.filter((cita) => cita?.usuarioId != null && String(cita.usuarioId) === clienteId);
}

export function guardarCita(nuevaCita, clienteIdFormulario) {
  const cliente = obtenerClienteCitas();
  if (!cliente || String(cliente.id) !== clienteIdFormulario) {
    throw new Error('La sesión de cliente cambió. Vuelve a abrir el formulario con tu cuenta.');
  }

  const { clave, citas } = leerCitasCliente(String(cliente.id));
  const cita = {
    ...nuevaCita,
    usuarioId: cliente.id,
    id: generarIdCita(),
    estado: 'Pendiente',
    creadaEn: new Date().toISOString(),
  };

  localStorage.setItem(clave, JSON.stringify([...citas, cita]));
  return cita;
}
