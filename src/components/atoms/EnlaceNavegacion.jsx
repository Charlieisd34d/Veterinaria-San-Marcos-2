import { Link } from "react-router-dom";

const EnlaceNavegacion = ({ enlace = "#", etiqueta, activo = false, claseIcono }) => {
  return (
    <Link
      to={enlace}
      className={`nav-link px-3 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-1 ${activo ? "bg-success bg-opacity-10 text-success active" : "text-secondary"}`}
    >
      {claseIcono && <i className={claseIcono}></i>}
      {etiqueta}
    </Link>
  );
};

export default EnlaceNavegacion;