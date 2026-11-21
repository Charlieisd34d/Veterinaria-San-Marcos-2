import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';
import { obtenerImagenProducto } from '../utils/imagenProducto';

export function PaginaDetalleProducto(props) {
  const { id } = useParams();
  const { productos } = useProductos();
  const { agregarAlCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const productoEncontrado = productos?.find((p) => String(p.id) === String(id));
  
  const producto = productoEncontrado || {
    id: id || "1",
    nombre: "Alimento Súper Premium Perro Adulto",
    categoria: "Alimento",
    precio: 24990,
    descripcion: "Nutrición balanceada de alta calidad formulada especialmente para perros adultos de todas las razas.",
    imagen: "me001.jpg"
  };

  const manejarAgregar = () => {
    agregarAlCarrito(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <div className="mb-4">
        <Link to="/productos" className="text-decoration-none text-secondary small fw-medium">
          ← Volver al catálogo de productos
        </Link>
      </div>

      <div className="row g-4 g-lg-5 align-items-center">
        <div className="col-12 col-md-6">
          <div className="overflow-hidden rounded-4 shadow-sm border">
            <img 
              src={obtenerImagenProducto(producto.imagen)} 
              alt={producto.nombre} 
              className="img-fluid w-100 object-fit-cover"
              style={{ maxHeight: '420px', minHeight: '320px' }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <span className="badge bg-success-subtle text-success border mb-2 px-3 py-1 rounded-pill fw-medium">
            {producto.categoria || "Producto"}
          </span>
          <h1 className="fw-bold mb-3 display-6" style={{ color: '#123C35', fontFamily: 'serif' }}>
            {producto.nombre}
          </h1>
          <h3 className="fw-bold my-3 fs-2" style={{ color: '#123C35' }}>
            ${producto.precio?.toLocaleString('es-CL')}
          </h3>
          <p className="text-secondary mb-4 leading-relaxed">
            {producto.descripcion}
          </p>

          <div className="d-flex align-items-center gap-3">
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
              className="form-control text-center fw-bold rounded-3"
              style={{ width: '80px', height: '48px' }}
            />
            <button
              type="button"
              onClick={manejarAgregar}
              className="btn text-white px-4 py-2 rounded-3 fw-medium flex-grow-1 flex-md-grow-0"
              style={{ backgroundColor: '#123C35', height: '48px' }}
            >
              {agregado ? '✓ ¡Añadido al carrito!' : 'Añadir al carrito'}
            </button>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default PaginaDetalleProducto;