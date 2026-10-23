import { Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import { useProductos } from '../context/ProductosContext';

export function PaginaProductos(props) {
  const { productos } = useProductos();

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <div className="text-center mb-5">
        <span className="badge bg-success-subtle text-success border px-3 py-1 rounded-pill mb-2 fw-medium">
          Catálogo
        </span>
        <h1 className="fw-bold display-6" style={{ color: '#123C35', fontFamily: 'serif' }}>
          Nuestros Productos
        </h1>
        <p className="text-secondary max-w-2xl mx-auto mt-2">
          Alimentos, medicamentos y accesorios seleccionados para el bienestar de tu mascota.
        </p>
      </div>

      <div className="row g-4">
        {productos && productos.map((prod) => (
          <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-column">
              <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={prod.imagen} 
                  alt={prod.nombre} 
                  className="w-100 h-100 object-fit-cover" 
                />
                {prod.categoria && (
                  <span className="position-absolute top-0 start-0 m-3 badge bg-white text-dark shadow-sm rounded-pill px-2 py-1 small">
                    {prod.categoria}
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold fs-6 mb-2" style={{ color: '#123C35' }}>
                  {prod.nombre}
                </h5>
                <p className="card-text text-secondary small flex-grow-1 text-truncate">
                  {prod.descripcion}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                  <span className="fw-bold fs-5" style={{ color: '#123C35' }}>
                    ${prod.precio?.toLocaleString('es-CL')}
                  </span>
                  <Link 
                    to={`/producto/${prod.id}`} 
                    className="btn btn-sm text-white px-3 py-2 rounded-3 fw-medium"
                    style={{ backgroundColor: '#123C35' }}
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PlantillaPublica>
  );
}

export default PaginaProductos;