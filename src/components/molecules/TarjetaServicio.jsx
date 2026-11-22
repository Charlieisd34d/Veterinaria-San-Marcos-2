import Boton from '../atoms/Boton';

function TarjetaServicio(props) {
  const iconoClase = props.claseIcono || props.icono;
  const manejarClick = props.onAccion || props.onSolicitar;

  return (
    <div className="card p-3 shadow-sm h-100">
      {props.imagen && (
        <img
          src={props.imagen}
          alt={props.titulo || 'Imagen de tarjeta'}
          className="card-img-top rounded mb-3"
        />
      )}
      {iconoClase && (
        <div className="mb-2 text-success fs-3">
          <i className={iconoClase}></i>
        </div>
      )}
      <h5 className="fw-bold">{props.titulo}</h5>
      {props.subtitulo && (
        <p className="text-muted small mb-2">{props.subtitulo}</p>
      )}
      <p className="text-muted flex-grow-1">{props.descripcion}</p>
      {props.precio && (
        <p className="fw-bold text-dark mb-2">{props.precio}</p>
      )}
      {manejarClick && (
        <Boton
          texto={props.textoBoton || 'Solicitar servicio'}
          variante="success"
          onClick={manejarClick}
        />
      )}
    </div>
  );
}

export default TarjetaServicio;