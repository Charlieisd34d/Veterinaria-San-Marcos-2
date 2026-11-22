import React from 'react';
import TarjetaCita from '../molecules/TarjetaCita';

function ListaCitas(props) {
  const citas = Array.isArray(props.citas) ? props.citas : [];
  const esAdministrador = props.esAdministrador || false;
  const alCambiarEstado = props.alCambiarEstado;

  if (citas.length === 0) {
    return (
      <div className="alert alert-info text-center">
        No hay solicitudes de citas registradas.
      </div>
    );
  }

  return (
    <div className="row">
      {citas.map(function (cita) {
        return (
          <div className="col-12 col-lg-6" key={cita.id}>
            <TarjetaCita
              cita={cita}
              esAdministrador={esAdministrador}
              alCambiarEstado={alCambiarEstado}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ListaCitas;
