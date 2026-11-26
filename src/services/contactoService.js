const CLAVE_MENSAJES_CONTACTO = 'mensajes_contacto_veterinaria';

export function guardarMensajeContacto(valores) {
  const actuales = JSON.parse(localStorage.getItem(CLAVE_MENSAJES_CONTACTO) ?? '[]');
  if (!Array.isArray(actuales)) throw new Error('El almacenamiento de mensajes tiene un formato inválido.');

  const nuevoMensaje = {
    ...valores,
    id: Date.now(),
    enviadoEn: new Date().toISOString(),
  };
  localStorage.setItem(CLAVE_MENSAJES_CONTACTO, JSON.stringify([...actuales, nuevoMensaje]));
}
