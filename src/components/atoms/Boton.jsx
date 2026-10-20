function Boton(props) {
  const variante = props.variante || "primary";
  const tamano = props.tamano ? `btn-${props.tamano}` : "";

  return (
    <button
      type={props.tipo || "button"}
      className={`btn btn-${variante}`}
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
}

export default Boton;