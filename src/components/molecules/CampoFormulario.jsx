import Boton from "../atoms/Boton";
import CampoTexto from "../atoms/CampoTexto";

function CampoFormulario(props) {
  return (
    <div className="form-group mb-3">
      <label className="form-label">{props.etiqueta || "Correo electrónico"}</label>
      <CampoTexto
        tipo={props.tipo || "email"}
        placeholder={props.placeholder || "ejemplo@correo.com"}
        value={props.value}
        onChange={props.onChange}
      />
      <Boton texto={props.textoBoton || "Enviar"} onClick={props.onSubmit} />
    </div>
  );
}

export default CampoFormulario;