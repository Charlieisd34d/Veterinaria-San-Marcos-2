import { Link } from "react-router-dom";

export function BarraSuperior(props) {
  return (
    <div className="bg-light py-2 border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {(props.elementos ?? []).map((elemento) => (
          <div key={elemento.id} className="d-flex align-items-center gap-2 small text-secondary">
            {elemento.claseIcono && <i className={elemento.claseIcono}></i>}
            <span>{elemento.texto}</span>
            {elemento.esAccesoPrivado && (
              <Link to="/iniciar-sesion" className="btn btn-link btn-sm p-0 text-decoration-none">
                Acceso
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BarraSuperior;