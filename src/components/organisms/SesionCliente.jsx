import { Link } from "react-router-dom";

function SesionCliente({ nombre, correo, onCerrarSesion }) {
  return (
    <section className="card border-0 shadow-lg rounded-4 p-4 mx-auto sesion-cliente">
      <h1 className="h3">Sesión iniciada</h1>
      <p className="mb-3">{nombre} · {correo}</p>
      <div className="d-flex flex-wrap gap-2">
        <Link className="btn btn-success" to="/">Ir al inicio</Link>
        <button type="button" className="btn btn-outline-secondary" onClick={onCerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    </section>
  );
}

export default SesionCliente;
