import TarjetaServicio from '../molecules/TarjetaServicio';

const ListaServicios = ({ 
  tituloSeccion, 
  descripcionSeccion, 
  items = [], 
  textoBoton, 
  alHacerClicBoton 
}) => {
  return (
    <div className="my-4">
      <div className="mb-4">
        <h1 className="fw-bold text-dark display-5" style={{ color: '#0d3b33' }}>
          {tituloSeccion}
        </h1>
        {descripcionSeccion && (
          <p className="text-muted lead">
            {descripcionSeccion}
          </p>
        )}
      </div>

      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-6 col-lg-4" key={item.id || item.codigo}>
            <TarjetaServicio 
              titulo={item.nombre || item.titulo} 
              descripcion={item.observaciones || item.descripcion || item.resumen} 
              claseIcono={item.icono}
              imagen={item.imagen}
              subtitulo={item.categoria ? `${item.categoria} · ${item.fecha}` : null}
              textoBoton={item.imagen ? "Leer artículo" : null}
              onAccion={item.onAccion}
            />
          </div>
        ))}
      </div>

      {textoBoton && (
        <div className="mt-5">
          <button 
            className="btn btn-lg px-4 text-white" 
            style={{ backgroundColor: '#0d5c4d', borderColor: '#0d5c4d' }}
            onClick={alHacerClicBoton}
          >
            {textoBoton}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListaServicios;