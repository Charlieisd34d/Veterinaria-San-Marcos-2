import { Link } from 'react-router-dom';

export default function DetalleProductoOrganismo({ producto, cantidad, onCambiarCantidad, onAgregar }) {
  return (
    <>
      <div className="mb-4">
        <Link to="/productos" className="text-decoration-none text-secondary small fw-medium">
          ← Volver al catálogo de productos
        </Link>
      </div>

      <div className="row g-4 g-lg-5 align-items-center">
        <div className="col-12 col-md-6">
          <div className="overflow-hidden rounded-4 shadow-sm border">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid w-100 object-fit-cover imagen-seccion"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <span className="badge bg-success-subtle text-success border mb-2 px-3 py-1 rounded-pill fw-medium">
            {producto.categoria || "Producto"}
          </span>
          <h1 className="fw-bold mb-3 display-6 text-marca fuente-serif">
            {producto.nombre}
          </h1>
          <h3 className="fw-bold my-3 fs-2 text-marca">
            ${producto.precio?.toLocaleString('es-CL')}
          </h3>
          <p className="text-secondary mb-4 leading-relaxed">
            {producto.descripcion}
          </p>

          <div className="d-flex align-items-center gap-3">
            <input
              type="number"
              aria-label="Cantidad"
              min="1"
              value={cantidad}
              onChange={(e) => onCambiarCantidad(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="form-control text-center fw-bold rounded-3 control-cantidad-ancho control-cantidad-alto"
            />
            <button
              type="button"
              onClick={onAgregar}
              className="btn text-white px-4 py-2 rounded-3 fw-medium flex-grow-1 flex-md-grow-0 btn-marca control-cantidad-alto"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
