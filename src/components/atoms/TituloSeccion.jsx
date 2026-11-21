function TituloSeccion({ texto, className = "" }) {
  return <h2 className={`fw-bold mb-3 ${className}`.trim()} style={{ color: "#123C35" }}>{texto}</h2>;
}

export default TituloSeccion;
