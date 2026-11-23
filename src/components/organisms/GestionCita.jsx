import { useState } from "react";
import Boton from "../atoms/Boton";
import ModalComun from "../molecules/ModalComun";
import { accionesDisponiblesCita, gestionarCita } from "../../services/solicitudesService";
import { obtenerFechaHoyISO } from "../../utils/fechas";

const etiquetas = {
  aprobar: "Aprobar cita",
  postergar: "Postergar cita",
  completar: "Marcar completada",
  cancelar: "Cancelar cita",
  eliminar: "Eliminar cita",
};

function GestionCita({ cita, onEliminada }) {
  const [accion, setAccion] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  function abrir(operacion) {
    setAccion(operacion);
    setFecha("");
    setError("");
    setMensaje("");
  }

  function guardar(evento) {
    evento.preventDefault();
    try {
      const actualizada = gestionarCita({ usuarioId: cita.usuarioId, citaId: cita.id, accion, fecha });
      if (!actualizada) {
        onEliminada();
        return;
      }
      setMensaje(`Cita actualizada. Estado: ${actualizada.estado}.`);
      setAccion("");
    } catch (fallo) {
      setError(fallo.message);
    }
  }

  return (
    <section className="mt-4" aria-label="Gestión de la cita">
      {mensaje && <p className="alert alert-success" role="status">{mensaje}</p>}
      <div className="d-flex flex-wrap gap-2">
        {accionesDisponiblesCita(cita.estado).map((operacion) => (
          <Boton
            key={operacion}
            texto={etiquetas[operacion]}
            variante={operacion === "eliminar" ? "outline-danger" : "outline-primary"}
            onClick={() => abrir(operacion)}
          />
        ))}
      </div>
      <ModalComun show={Boolean(accion)} onHide={() => setAccion("")} titulo={etiquetas[accion]}>
        <form onSubmit={guardar}>
          {accion === "eliminar" && <p>La cita se quitará del panel y del historial del cliente.</p>}
          {accion === "postergar" && (
            <div className="mb-3">
              <label className="form-label" htmlFor="nueva-fecha-cita">Nueva fecha</label>
              <input
                className="form-control"
                id="nueva-fecha-cita"
                type="date"
                min={obtenerFechaHoyISO()}
                value={fecha}
                onChange={(evento) => setFecha(evento.target.value)}
                required
              />
            </div>
          )}
          {error && <p className="alert alert-danger" role="alert">{error}</p>}
          <div className="d-flex justify-content-end gap-2">
            <Boton texto="Volver" variante="outline-secondary" onClick={() => setAccion("")} />
            <Boton texto="Confirmar cambio" tipo="submit" variante={accion === "eliminar" ? "danger" : "primary"} />
          </div>
        </form>
      </ModalComun>
    </section>
  );
}

export default GestionCita;
