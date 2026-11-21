import { Link } from "react-router-dom";

function PaginaNoEncontrada() {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-4 fw-bold text-danger">404</h1>
              <h2 className="mb-3">Página no encontrada</h2>
              <p className="text-muted mb-4">
                La página que intentas abrir no existe o fue movida.
              </p>
              <Link to="/" className="btn btn-primary">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaNoEncontrada;
