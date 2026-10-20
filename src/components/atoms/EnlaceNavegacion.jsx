function EnlaceNavegacion(props) {
  const clases = props.activo
    ? "bg-success bg-opacity-10 text-success active"
    : "text-secondary";

  return (
    <a
      href={props.enlace || "#"}
      onClick={props.onClick}
      className={`nav-link px-3 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-1 ${clases}`}
    >
      {props.claseIcono && <i className={props.claseIcono}></i>}
      {props.etiqueta}
    </a>
  );
}

export default EnlaceNavegacion;