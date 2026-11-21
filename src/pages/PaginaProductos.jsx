import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import { useProductos } from '../context/ProductosContext';
import { obtenerImagenProducto } from '../utils/imagenProducto';

export function PaginaProductos(props) {
  const { productos = [] } = useProductos();
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const categorias = useMemo(() => {
    const unicas = new Set(productos.map((p) => p.categoria).filter(Boolean));
    return ['Todas', ...Array.from(unicas)];
  }, [productos]);

  const textoNormalizado = busqueda.trim().toLowerCase();

  const productosFiltrados = useMemo(() => {
    return productos.filter((prod) => {
      const coincideCategoria =
        categoriaSeleccionada === 'Todas' || prod.categoria === categoriaSeleccionada;

      const coincideTexto =
        !textoNormalizado ||
        prod.nombre?.toLowerCase().includes(textoNormalizado) ||
        prod.descripcion?.toLowerCase().includes(textoNormalizado) ||
        prod.categoria?.toLowerCase().includes(textoNormalizado) ||
        prod.principioActivo?.toLowerCase().includes(textoNormalizado);

      return coincideCategoria && coincideTexto;
    });
  }, [productos, categoriaSeleccionada, textoNormalizado]);

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <div className="text-center mb-4">
        <span className="badge bg-success-subtle text-success border px-3 py-1 rounded-pill mb-2 fw-medium">
          Farmacia Veterinaria • Stock Oficial
        </span>
        <h1 className="fw-bold display-6" style={{ color: '#123C35', fontFamily: 'serif' }}>
          Medicamentos y Vacunas
        </h1>
        <p className="text-secondary mx-auto mt-2" style={{ maxWidth: '640px' }}>
          Catálogo oficial de farmacia clínica de Veterinaria San Marcos. Consulta disponibilidad y detalles de presentación por especie.
        </p>
      </div>

      {/* Buscador y filtros por categoría */}
      <div className="row justify-content-center mb-4 g-3">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="input-group shadow-sm rounded-pill overflow-hidden border bg-white">
            <span className="input-group-text bg-white border-0 ps-3 text-secondary">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Buscar medicamento, principio activo o especie..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            {busqueda && (
              <button
                type="button"
                className="btn btn-link text-secondary text-decoration-none pe-3"
                onClick={() => setBusqueda('')}
                title="Limpiar búsqueda"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {categorias.map((cat) => {
          const activa = categoriaSeleccionada === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`btn btn-sm rounded-pill px-3 fw-medium ${ activa ? 'text-white shadow-sm' : 'btn-outline-secondary bg-white' }`} style={activa ? { backgroundColor: '#123C35', borderColor: '#123C35' } : undefined} > {cat} </button> ); })} </div>  {productosFiltrados.length === 0 ? ( <div className="text-center py-5"> <i className="bi bi-capsule text-muted display-4 mb-3 d-block"></i> <h5 className="fw-bold text-secondary">No encontramos productos con ese criterio</h5> <button type="button" className="btn btn-outline-success btn-sm rounded-pill mt-2" onClick={() => { setBusqueda(''); setCategoriaSeleccionada('Todas'); }} > Mostrar los {productos.length} productos </button> </div> ) : ( <div className="row g-4"> {productosFiltrados.map((prod) => ( <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3"> <div className="card h-100 rounded-4 overflow-hidden d-flex flex-column border-0 shadow-sm"> <div className="position-relative overflow-hidden" style={{ height: '200px' }}> <img src={obtenerImagenProducto(prod.imagen)} alt={prod.nombre} className="w-100 h-100 object-fit-cover" /> {prod.categoria && ( <span className="position-absolute top-0 start-0 m-3 badge shadow-sm rounded-pill px-2 py-1 small bg-white text-dark"> {prod.categoria} </span> )} {typeof prod.stock === 'number' && ( <span className="position-absolute bottom-0 end-0 m-2 badge bg-dark bg-opacity-75 text-white rounded-pill px-2 py-1 small"> Stock: {prod.stock} </span> )} </div>  <div className="card-body d-flex flex-column p-4"> <h5 className="card-title fw-bold fs-6 mb-2" style={{ color: '#123C35' }}> {prod.nombre} </h5> <p className="card-text text-secondary small flex-grow-1" title={prod.descripcion}> {prod.descripcion} </p> <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top"> <span className="fw-bold fs-5" style={{ color: '#123C35' }}> ${prod.precio?.toLocaleString('es-CL')} </span>  <Link to={`/producto/${prod.id}`}
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
      )}
    </PlantillaPublica>
  );
}

export default PaginaProductos;