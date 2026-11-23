import solicitudesIniciales from "../data/admin/solicitudesIniciales.json";

import { modificarCitaAdministrativa } from "./citasService";
import { obtenerFechaHoyISO } from "../utils/fechas";
import { excluirRegistrosIniciales } from "../utils/registrosIniciales";

const CLAVE = "solicitudes";

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(solicitudesIniciales));
    return [...solicitudesIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarSolicitudes() {
  return leer();
}

export function obtenerSolicitude(id) {
  return leer().find((p) => p.id === id) ?? null;
}

export function crearSolicitud(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((p) => p.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarSolicitud(id, cambios) {
  const lista = leer().map((p) => (p.id === id ? { ...p, ...cambios } : p));
  guardar(lista);
  return lista.find((p) => p.id === id) ?? null;
}

export function eliminarSolicitud(id) {
  guardar(leer().filter((p) => p.id !== id));
}

const operacionesPorEstado = {
  Pendiente: ["aprobar", "postergar", "cancelar"],
  Confirmada: ["postergar", "completar", "cancelar"],
  Reprogramada: ["aprobar", "postergar", "cancelar"],
};

const estadosPorOperacion = {
  aprobar: "Confirmada",
  postergar: "Reprogramada",
  completar: "Completada",
  cancelar: "Cancelada",
};

export function accionesDisponiblesCita(estado) {
  return [...(Object.hasOwn(operacionesPorEstado, estado) ? operacionesPorEstado[estado] : []), "eliminar"];
}

export function gestionarCita({ usuarioId, citaId, accion, fecha }) {
  try {
    return modificarCitaAdministrativa(usuarioId, citaId, (cita) => {
      if (!accionesDisponiblesCita(cita.estado).includes(accion)) {
        throw new Error("La operación no está disponible para el estado actual.");
      }
      if (accion === "eliminar") return null;
      if (accion !== "postergar") return { ...cita, estado: estadosPorOperacion[accion] };

      const fechaISO = /^\d{4}-\d{2}-\d{2}$/.test(fecha ?? "") && new Date(`${fecha}T00:00:00Z`);
      if (!fechaISO || Number.isNaN(fechaISO.getTime()) || fechaISO.toISOString().slice(0, 10) !== fecha ||
          fecha < obtenerFechaHoyISO() || fecha <= cita.fecha) {
        throw new Error("Elige una fecha válida posterior a la cita actual y a partir de hoy.");
      }
      return { ...cita, estado: estadosPorOperacion.postergar, fecha };
    });
  } catch (error) {
    if (error instanceof DOMException || error instanceof SyntaxError) {
      throw new Error("No se pudo guardar el cambio en este navegador.");
    }
    throw error;
  }
}

export function filtrarSolicitudesRegistradas(solicitudes) {
  return excluirRegistrosIniciales(solicitudes, solicitudesIniciales);
}
