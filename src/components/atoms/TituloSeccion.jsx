function TituloSeccion({ texto, className = "" }) {
  return <h2 className={`fw-bold mb-3 text-marca ${className}`.trim()}>{texto}</h2>;
}

export default TituloSeccion;
