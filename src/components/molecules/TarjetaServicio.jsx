import Boton from "../atoms/Boton";

function TarjetaServicio(props) {
  return (
    <div className="card shadow-sm h-100 overflow-hidden border">
      {props.imagen && (
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img 
            src={props.imagen} 
            alt={props.titulo} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      <div className="card-body d-flex flex-column">
        {props.icono && (
          <div className="mb-2 text-success fs-3">
            <i className={props.icono}></i>
          </div>
        )}

        {props.subtitulo && (
          <div className="text-muted small fw-semibold mb-2">
            {props.subtitulo}
          </div>
        )}

        <h5 className="fw-bold card-title">{props.titulo}</h5>
        <p className="card-text text-muted flex-grow-1">{props.descripcion}</p>
        
        {props.precio && (
          <p className="fw-bold text-dark mb-2">{props.precio}</p>
        )}

        {props.textoBoton && (
          <div className="mt-2">
            <Boton 
              texto={props.textoBoton} 
              variante="link" 
              className="p-0 text-decoration-none fw-bold"
              onClick={props.onAccion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TarjetaServicio;