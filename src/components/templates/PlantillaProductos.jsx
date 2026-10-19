import { useNavigate } from 'react-router-dom';
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer'; 

export function PlantillaProductos({
  datosBarraSuperior = {},
  datosNavBar = {},
  datosFooter = {},
  datosSeccionProductos = {}
}) {
  const navigate = useNavigate();

  const {
    titulo,
    subtitulo,
    categorias = [],
    categoriaActiva,
    alSeleccionarCategoria,
    productos = [],
    formatearPrecio,
    alAgregarProducto,
    notificacion
  } = datosSeccionProductos;

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <BarraSuperior {...datosBarraSuperior} />
      <NavBar {...datosNavBar} onNavegar={navigate} />

      {notificacion && (
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <div className="alert alert-success shadow-sm mb-0">
            <i className="bi bi-check-circle-fill me-2"></i>
            {notificacion}
          </div>
        </div>
      )}

      <main className="flex-grow-1 container-fluid px-3 px-md-5 py-4">
        <div className="mb-4">
          <h1 className="fw-bold text-dark">{titulo}</h1>
          <p className="text-secondary">{subtitulo}</p>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => alSeleccionarCategoria && alSeleccionarCategoria(cat)}
              className={`btn rounded-pill px-3 py-1 text-sm ${
                categoriaActiva === cat
                  ? 'btn-success text-white'
                  : 'btn-outline-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {productos.map((prod) => (
            <div key={prod.id} className="col">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center p-3">
                <div 
                  onClick={() => navigate(`/productos/${prod.id}`)} 
                  style={{ cursor: 'pointer', width: '100%' }}
                >
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="card-img-top object-fit-cover rounded-3 mb-3"
                    style={{ height: '180px', width: '100%' }}
                  />
                  <span className="badge bg-light text-secondary mb-2 border rounded-pill px-3 py-1">
                    {prod.categoria}
                  </span>
                  <h5 className="card-title fw-bold text-dark mb-1">{prod.nombre}</h5>
                  <p className="card-text text-muted small mb-3">{prod.descripcion}</p>
                  <div className="h5 fw-bold text-success mb-3">
                    {formatearPrecio ? formatearPrecio(prod.precio) : `$${prod.precio}`}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alAgregarProducto && alAgregarProducto(prod);
                  }}
                  className="btn btn-outline-success w-100 rounded-pill btn-sm mt-auto"
                >
                  <i className="bi bi-cart-plus me-1"></i> Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer {...datosFooter} />
    </div>
  );
}

export default PlantillaProductos;