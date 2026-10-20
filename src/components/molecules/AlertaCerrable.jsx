import Alerta from "../atoms/Alerta";
import Boton from "../atoms/Boton";

function AlertaCerrable(props) {
  return (
    <div className="d-flex align-items-center gap-2">
      <Alerta texto={props.texto} variante={props.variante} />
      <Boton
        texto={props.textoCerrar}
        variante="outline-secondary"
        onClick={props.onCerrar}
      />
    </div>
  );
}

export default AlertaCerrable;