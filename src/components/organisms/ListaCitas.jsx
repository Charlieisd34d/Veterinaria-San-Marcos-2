import TarjetaCita from '../molecules/TarjetaCita';

function ListaCitas({ citas }) {
  if (citas.length === 0) {
    return (
      <div className="alert alert-info text-center">
        No hay solicitudes de citas registradas.
      </div>
    );
  }

  return (
    <div className="row">
      {citas.map((cita) => (
        <div className="col-12 col-lg-6" key={cita.id}>
          <TarjetaCita cita={cita} />
        </div>
      ))}
    </div>
  );
}

export default ListaCitas;
