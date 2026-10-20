import AlertaCerrable from "../molecules/AlertaCerrable";

function AvisoPagina(props) {
  if (!props.mensaje) {
    return null;
  }

  return (
    <div className="container pt-3">
      <AlertaCerrable
        texto={props.mensaje.texto}
        variante={props.mensaje.variante}
        textoCerrar={props.textoCerrar}
        onCerrar={props.onCerrar}
      />
    </div>
  );
}

export default AvisoPagina;