function Boton(props) {
  const variante = props.variante || "primary";
  const tipo = props.tipo || "button";

  return (
    <button type={tipo} className={`btn btn-${variante}`} onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Boton;