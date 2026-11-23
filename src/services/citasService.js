import { estaAutenticado } from '../utils/autenticacion';
import { obtenerClienteCitas } from '../utils/clienteCitas';

export const EVENTO_CAMBIO_CITAS = 'citas:actualizadas';

const CLAVE_CITAS = 'citas_veterinaria_san_marcos';

function leerCitasCliente(clienteId) {
  const clave = `${CLAVE_CITAS}:${clienteId}`;
  const contenido = localStorage.getItem(clave);
  const citas = contenido === null ? [] : JSON.parse(contenido);
  if (!Array.isArray(citas)) throw new Error('El historial local de citas tiene un formato inválido.');

  return { clave, citas };
}

function persistirCitas(clave, citas) {
  localStorage.setItem(clave, JSON.stringify(citas));
  window.dispatchEvent(new Event(EVENTO_CAMBIO_CITAS));
}

export function modificarCitaAdministrativa(usuarioId, citaId, transformar) {
  if (!estaAutenticado()) throw new Error('Esta operación requiere una sesión de administrador.');

  const { clave, citas } = leerCitasCliente(String(usuarioId));
  const indice = citas.findIndex((cita) =>
    cita?.id === citaId && cita.usuarioId != null && String(cita.usuarioId) === String(usuarioId)
  );
  if (indice === -1) throw new Error('La cita ya no está disponible.');

  const actualizada = transformar(citas[indice]);
  if (actualizada === null) citas.splice(indice, 1);
  else citas[indice] = actualizada;

  persistirCitas(clave, citas);
  return actualizada;
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

export function listarCitasAdministrativas() {
  if (!estaAutenticado()) return [];

  const prefijo = `${CLAVE_CITAS}:`;
  const ids = Object.keys(localStorage)
    .filter((clave) => clave.startsWith(prefijo))
    .map((clave) => clave.slice(prefijo.length));

  return ids.flatMap((id) => {
    const { citas } = leerCitasCliente(id);
    return citas
      .filter((cita) => cita?.id != null && cita.usuarioId != null && String(cita.usuarioId) === id);
  }).sort((a, b) => String(b.creadaEn).localeCompare(String(a.creadaEn)));
}

export function prepararComprobanteCita(cita) {
  return {
    ...cita,
    cliente: cita.cliente || `Cliente #${cita.usuarioId}`,
    servicio: cita.servicioSeleccionado || cita.servicio,
    motivo: cita.servicioSeleccionado ? cita.servicio : undefined,
  };
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
    cliente: cliente.nombre,
    id: generarIdCita(),
    estado: 'Pendiente',
    creadaEn: new Date().toISOString(),
  };

  persistirCitas(clave, [...citas, cita]);
  return cita;
}
