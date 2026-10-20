function EtiquetaSeccion(props) {
  return (
    <p className="text-success text-uppercase fw-bold small mb-2">
      {props.texto}
    </p>
  );
}

export default EtiquetaSeccion;