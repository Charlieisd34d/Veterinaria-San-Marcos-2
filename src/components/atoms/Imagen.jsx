function Imagen(props) {
  return (
    <img
      src={props.ruta}
      alt={props.textoAlternativo}
      className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
      style={{ maxHeight: props.altoMaximo || "480px" }}
    />
  );
}

export default Imagen;