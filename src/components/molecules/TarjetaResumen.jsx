import Icono from "../atoms/Icono";

function TarjetaResumen(props) {
  return (
    <div className="card p-3 shadow-sm h-100">
      <div className="d-flex align-items-center gap-3">
        <div className="text-success fs-2">
          <Icono clase={props.icono} />
        </div>
        <div>
          <div className="fs-3 fw-bold">{props.valor}</div>
          <small className="text-muted">{props.titulo}</small>
        </div>
      </div>
    </div>
  );
}

export default TarjetaResumen;