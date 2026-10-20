function Logo(props) {
  return (
    <img
      src={props.ruta}
      alt={props.textoAlternativo}
      className="img-fluid"
    />
  );
}

export default Logo;