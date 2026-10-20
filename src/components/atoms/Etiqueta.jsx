function Etiqueta(props) {
  const variante = props.variante || "secondary";
  return (
    <span className={`badge text-bg-${variante}`}>
      {props.texto}
    </span>
  );
}

export default Etiqueta;