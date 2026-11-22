const CLAVE_CITAS = 'citas_veterinaria_san_marcos';

function generarIdCita() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function obtenerCitas() {
  try {
    const citas = JSON.parse(
      localStorage.getItem(CLAVE_CITAS) || '[]'
    );

    return Array.isArray(citas) ? citas : [];
  } catch (error) {
    console.error('Error al recuperar las citas:', error);
    return [];
  }
}

export function guardarCita(nuevaCita) {
  const citasActuales = obtenerCitas();

  const citaCompleta = {
    ...nuevaCita,
    id: generarIdCita(),
    estado: 'Pendiente',
    creadaEn: new Date().toISOString()
  };

  const citasActualizadas = [
    ...citasActuales,
    citaCompleta
  ];

  localStorage.setItem(
    CLAVE_CITAS,
    JSON.stringify(citasActualizadas)
  );

  return citaCompleta;
}

export function actualizarEstadoCita(id, nuevoEstado) {
  const citas = obtenerCitas();

  const citasActualizadas = citas.map(function (cita) {
    if (String(cita.id) === String(id)) {
      return {
        ...cita,
        estado: nuevoEstado
      };
    }

    return cita;
  });

  localStorage.setItem(
    CLAVE_CITAS,
    JSON.stringify(citasActualizadas)
  );

  return citasActualizadas;
}