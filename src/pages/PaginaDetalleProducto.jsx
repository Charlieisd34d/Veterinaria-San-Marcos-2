import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import DetalleProductoOrganismo from '../components/organisms/DetalleProductoOrganismo';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';

export default function PaginaDetalleProducto() {
  const { id } = useParams();
  const { productos } = useProductos();
  const { agregarAlCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState(1);
  const producto = productos.find((item) => String(item.id) === id);

  return (
    <PlantillaPublica>
      {producto ? (
        <DetalleProductoOrganismo
          producto={producto}
          cantidad={cantidad}
          onCambiarCantidad={setCantidad}
          onAgregar={() => agregarAlCarrito(producto, cantidad)}
        />
      ) : (
        <section className="text-center py-5">
          <h1 className="h3">Producto no encontrado</h1>
          <Link to="/productos" className="btn btn-outline-success mt-3">Volver al catálogo</Link>
        </section>
      )}
    </PlantillaPublica>
  );
}
