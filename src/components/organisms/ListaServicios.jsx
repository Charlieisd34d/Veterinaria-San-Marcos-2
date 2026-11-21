import TarjetaServicio from '../molecules/TarjetaServicio';

function ListaServicios(props) {
  const insignia = props.insignia;
  const tituloSeccion = props.tituloSeccion;
  const descripcionSeccion = props.descripcionSeccion;
  const items = Array.isArray(props.items) ? props.items : [];
  const textoBoton = props.textoBoton;
  const alHacerClicBoton = props.alHacerClicBoton;

  return (
    <div className="my-4">
      <div className="mb-4">
        {insignia && (
          <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 mb-3 insignia-seccion">
            {insignia}
          </span>
        )}
        <h1 className="fw-bold display-5">
          {tituloSeccion}
        </h1>
        {descripcionSeccion && (
          <p className="text-muted lead">
            {descripcionSeccion}
          </p>
        )}
      </div>

      <div className="row g-4">
        {items.map(function (item) {
          return (
            <div className="col-md-6 col-lg-4" key={item.id || item.codigo}>
              <TarjetaServicio
                titulo={item.nombre || item.titulo}
                descripcion={item.observaciones || item.descripcion || item.resumen}
                claseIcono={item.icono}
                imagen={item.imagen}
                subtitulo={item.categoria ? `${item.categoria} · ${item.fecha}` : null}
                textoBoton={item.imagen ? 'Leer artículo' : null}
                onAccion={item.onAccion}
              />
            </div>
          );
        })}
      </div>

      {textoBoton && (
        <div className="mt-5">
          <button
            type="button"
            className="btn btn-success btn-lg px-4"
            onClick={alHacerClicBoton}
          >
            {textoBoton}
          </button>
        </div>
      )}
    </div>
  );
}

export default ListaServicios;