import { useNavigate } from 'react-router-dom';

export function DetalleProductoOrganismo({ producto, formatearPrecio, alAgregarProducto }) {
  const navigate = useNavigate();

  if (!producto) {
    return (
      <div className="container text-center py-5">
        <h3>Producto no encontrado</h3>
        <p className="text-muted">El producto que buscas no existe o fue removido.</p>
        <button onClick={() => navigate('/productos')} className="btn btn-success rounded-pill mt-3">
          <i className="bi bi-arrow-left me-2"></i> Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <button 
        onClick={() => navigate('/productos')} 
        className="btn btn-outline-secondary rounded-pill mb-4 btn-sm"
      >
        <i className="bi bi-arrow-left me-2"></i> Volver al catálogo
      </button>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="row g-0">
          <div className="col-md-6 bg-light d-flex align-items-center justify-content-center p-4">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-fluid rounded-3 object-fit-cover"
              style={{ maxHeight: '400px', width: '100%' }}
            />
          </div>
          <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-between">
            <div>
              <span className="badge bg-success bg-opacity-10 text-success mb-3 px-3 py-2 rounded-pill fw-semibold">
                {producto.categoria}
              </span>
              <span className="text-muted small ms-2">Código: {producto.id}</span>
              
              <h2 className="fw-bold text-dark mb-3">{producto.nombre}</h2>
              <p className="text-secondary fs-5 mb-4">{producto.descripcion}</p>
            </div>

            <div>
              <div className="display-6 fw-bold text-success mb-4">
                {formatearPrecio ? formatearPrecio(producto.precio) : `$${producto.precio}`}
              </div>

              <div className="d-flex gap-3">
                <button
                  onClick={() => alAgregarProducto && alAgregarProducto(producto)}
                  className="btn btn-success btn-lg rounded-pill px-4 flex-grow-1"
                >
                  <i className="bi bi-cart-plus me-2"></i> Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProductoOrganismo;