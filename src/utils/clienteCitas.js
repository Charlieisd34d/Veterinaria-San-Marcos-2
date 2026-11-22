import { obtenerSesion } from './autenticacion';

export function obtenerClienteCitas() {
  const usuario = obtenerSesion()?.usuario;
  if (usuario?.rol !== 'CLIENTE') return null;

  const { id } = usuario;
  if (typeof id === 'string' && id.trim()) return usuario;
  if (Number.isSafeInteger(id)) return usuario;
  return null;
}
