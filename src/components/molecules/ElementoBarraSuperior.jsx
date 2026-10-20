import IconoTexto from "../atoms/IconoTexto";

function ElementoBarraSuperior(props) {
  return (
    <IconoTexto
      claseIcono={props.claseIcono}
      texto={props.texto}
    />
  );
}

export default ElementoBarraSuperior;