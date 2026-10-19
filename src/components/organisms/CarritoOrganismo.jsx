import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatearPrecio } from '../../utils/formatoPrecio';

export function CarritoOrganismo({
  carrito,
  actualizarCantidad,
  eliminarDelCarrito,
  vaciarCarrito,
  totalPrecio
}) {
  const navigate = useNavigate();
  const [compraExitosa, setCompraExitosa] = useState(false);

  const manejarFinalizarCompra = () => {
    setCompraExitosa(true);
    vaciarCarrito();
  };

  if (compraExitosa) {
    return (
      <div className="container text-center py-5">
        <div className="card border-0 shadow-sm rounded-4 p-5 mx-auto" style={{ maxWidth: '500px' }}>
          <i className="bi bi-check-circle-fill text-success display-1 mb-3"></i>
          <h3 className="fw-bold mb-2">¡Pedido confirmado!</h3>
          <p className="text-secondary mb-4">
            Gracias por tu compra. Te hemos enviado la confirmación de la reserva.
          </p>
          <button
            onClick={() => navigate('/productos')}
            className="btn btn-success rounded-pill px-4"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  if (carrito.length === 0) {
    return (
      <div className="container text-center py-5">
        <i className="bi bi-cart-x text-muted display-1 mb-3"></i>
        <h3 className="fw-bold">Tu carrito está vacío</h3>
        <p className="text-secondary mb-4">Aún no has añadido productos a tu pedido.</p>
        <button
          onClick={() => navigate('/productos')}
          className="btn btn-success rounded-pill px-4"
        >
          <i className="bi bi-arrow-left me-2"></i> Ver Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold m-0">Carrito de Compras</h2>
        <button
          onClick={vaciarCarrito}
          className="btn btn-outline-danger btn-sm rounded-pill"
        >
          <i className="bi bi-trash me-1"></i> Vaciar Carrito
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <div className="table-responsive">
              <table className="table align-middle m-0">
                <thead>
                  <tr className="text-secondary border-bottom">
                    <th>Producto</th>
                    <th className="text-center">Precio</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-end">Total parcial</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="rounded-3 object-fit-cover"
                            style={{ width: '60px', height: '60px' }}
                          />
                          <div>
                            <h6 className="fw-bold mb-0">{item.nombre}</h6>
                            <span className="badge bg-light text-secondary border">
                              {item.categoria}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center fw-semibold">
                        {formatearPrecio ? formatearPrecio(item.precio) : `$${item.precio}`}
                      </td>
                      <td className="text-center">
                        <div className="d-inline-flex align-items-center border rounded-pill px-2">
                          <button
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                            className="btn btn-link text-dark p-0 me-2 text-decoration-none"
                          >
                            -
                          </button>
                          <span className="fw-bold px-2">{item.cantidad}</span>
                          <button
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                            className="btn btn-link text-dark p-0 ms-2 text-decoration-none"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-end fw-bold text-success">
                        {formatearPrecio ? formatearPrecio(item.precio * item.cantidad) : `$${item.precio * item.cantidad}`}
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() => eliminarDelCarrito(item.id)}
                          className="btn btn-link text-danger p-0 border-0"
                          title="Eliminar producto"
                        >
                          <i className="bi bi-x-circle fs-5"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-3">Resumen del Pedido</h5>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Total parcial</span>
              <span className="fw-semibold">
                {formatearPrecio ? formatearPrecio(totalPrecio) : `$${totalPrecio}`}
              </span>
            </div>
            <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
              <span className="text-secondary">Envío / Retiro</span>
              <span className="text-success fw-semibold">Un convenir</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="fs-5 fw-bold">Total</span>
              <span className="fs-4 fw-bold text-success">
                {formatearPrecio ? formatearPrecio(totalPrecio) : `$${totalPrecio}`}
              </span>
            </div>
            <button
              onClick={manejarFinalizarCompra}
              className="btn btn-success rounded-pill btn-lg w-100 mb-2"
            >
              Finalizar Compra
            </button>
            <button
              onClick={() => navigate('/productos')}
              className="btn btn-outline-secondary rounded-pill btn-sm w-100"
            >
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarritoOrganismo;