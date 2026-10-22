import Icono from "../atoms/Icono";
import Boton from "../atoms/Boton";

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
      {props.textoIr && (
        <div className="mt-3">
          <Boton texto={props.textoIr} variante="outline-success" tamano="sm" onClick={props.onIr} />
        </div>
      )}
    </div>
  );
}

export default TarjetaResumen;