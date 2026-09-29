import Boton from "../atoms/Boton";
import CampoTexto from "../atoms/CampoTexto";

function CampoCorreo(props) {
  return (
    <div className="form-group mb-3">
      <label className="form-label">Correo electrónico</label>
      <CampoTexto
        tipo="email"
        placeholder="ejemplo@correo.com"
        value={props.correo}
        onChange={props.onChange}
      />
      <Boton texto="Enviar" onClick={props.onEnviar} />
    </div>
  );
}

export default CampoCorreo;