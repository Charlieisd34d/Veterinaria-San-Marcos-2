import Boton from "../atoms/Boton";
import CampoTexto from "../atoms/CampoTexto";

function CampoFormulario(props) {
  return (
    <div className="card p-3">
      <CampoTexto
        tipo="text"
        placeholder="Correo"
        value={props.correo}
        onChange={props.onChange}
      />
      <CampoTexto
        tipo="password"
        placeholder="Contraseña"
        value={props.password}
        onChange={props.onChangePassword}
      />
      <Boton texto="Enviar" onClick={props.onEnviar} />
    </div>
  );
}

export default CampoFormulario;