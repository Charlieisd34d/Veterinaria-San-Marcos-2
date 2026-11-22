
function TarjetaCita(props) {
  const cita = props.cita;
  const esAdministrador = props.esAdministrador || false;
  const alCambiarEstado = props.alCambiarEstado;

  const variantes = {
    Pendiente: 'warning',
    Confirmada: 'success',
    Realizada: 'primary',
    Cancelada: 'danger'
  };

  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
          <div>
            <h5 className="card-title mb-1">
              {cita.servicioSeleccionado || cita.servicio || 'Servicio veterinario'}
            </h5>

            <small className="text-muted">
              Solicitud #{cita.id}
            </small>
          </div>

          <span className={`badge text-bg-${variantes[cita.estado] || 'secondary'}`}>
            {cita.estado || 'Pendiente'}
          </span>
        </div>

        <hr />

        <p className="mb-1">
          <strong>Mascota:</strong> {cita.mascota || 'No especificada'}
        </p>

        <p className="mb-1">
          <strong>Motivo:</strong> {cita.servicio || 'No especificado'}
        </p>

        <p className="mb-1">
          <strong>Correo:</strong> {cita.correo || 'No especificado'}
        </p>

        <p className="mb-1">
          <strong>Fecha:</strong> {cita.fecha || 'No especificada'}
        </p>

        <p className="text-muted small mt-3 mb-0">
          Solicitud registrada: {
            cita.creadaEn
              ? new Date(cita.creadaEn).toLocaleString('es-CL')
              : 'Sin información'
          }
        </p>

        {esAdministrador && (
          <div className="mt-3">
            <label className="form-label">
              Actualizar estado
            </label>

            <select
              className="form-select"
              value={cita.estado || 'Pendiente'}
              onChange={function (e) {
                if (typeof alCambiarEstado === 'function') {
                  alCambiarEstado(cita.id, e.target.value);
                }
              }}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Confirmada">Confirmada</option>
              <option value="Realizada">Realizada</option>
              <option value="Cancelada">Cancelada</option>
            </select>
          </div>
        )}

      </div>
    </div>
  );
}

export default TarjetaCita;
