import EtiquetaCampo from "../atoms/EtiquetaCampo";
import CampoTexto from "../atoms/CampoTexto";
import TextoError from "../atoms/TextoError";

function CampoConEtiqueta(props) {
  return (
    <div className="mb-3">
      <EtiquetaCampo para={props.id} texto={props.etiqueta} />
      <CampoTexto
        id={props.id}
        tipo={props.tipo}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        invalido={Boolean(props.error)}
      />
      {props.error && <TextoError texto={props.error}/>}
    </div>
  );
}

export default CampoConEtiqueta;