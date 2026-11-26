import { Link } from "react-router-dom";
import Imagen from "../atoms/Imagen";

export default function SeccionHero() {
  return (
    <section className="row align-items-center g-5 py-4">
      <div className="col-lg-6">
        <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2 mb-3">
          VETERINARIA SAN MARCOS
        </span>
        <h1 className="display-4 fw-bold mb-3 text-marca">
          Cuidamos la salud de tu mascota.
        </h1>
        <p className="lead text-secondary mb-4">
          Atención veterinaria cercana y profesional para perros, gatos y pequeñas especies.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <Link to="/servicios" className="btn btn-outline-success px-4 py-3">
            Ver servicios
          </Link>
        </div>
      </div>

      <div className="col-lg-6">
        <Imagen
          ruta="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
          textoAlternativo="Perro en atención veterinaria"
          className="shadow-lg imagen-hero"
        />
      </div>
    </section>
  );
}
