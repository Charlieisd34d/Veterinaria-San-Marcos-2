import { Link } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { useCarrito } from "../context/CarritoContext";

export function PaginaCarrito(props) {
  const { carrito, actualizarCantidad, eliminarDelCarrito, totalPrecio: totalCarrito } = useCarrito();

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <h1 className="fw-bold mb-4 display-6 text-center" style={{ color: "#123C35", fontFamily: "serif" }}>
        Tu Carrito de Compras
      </h1>

      {carrito.length === 0 ? (
        <div className="text-center py-5">
          <p className="fs-5 text-secondary mb-4">El carrito está actualmente vacío.</p>
          <Link to="/productos" className="btn text-white px-4 py-2 rounded-3 fw-medium" style={{ backgroundColor: "#123C35" }}>
            Ir a la Tienda
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="table-responsive border rounded-4 p-3 shadow-sm">
              <table className="table align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th className="text-center">Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <img src={item.imagen} alt={item.nombre} width="50" height="50" className="rounded object-fit-cover" />
                          <span className="fw-medium text-dark">{item.nombre}</span>
                        </div>
                      </td>
                      <td className="text-secondary">${item.precio?.toLocaleString("es-CL")}</td>
                      <td style={{ width: "100px" }}>
                        <input
                          type="number"
                          min="1"
                          value={item.cantidad}
                          onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value) || 1)}
                          className="form-control form-control-sm text-center fw-medium"
                        />
                      </td>
                      <td className="fw-bold" style={{ color: "#123C35" }}>
                        ${(item.precio * item.cantidad).toLocaleString("es-CL")}
                      </td>
                      <td className="text-end">
                        <button onClick={() => eliminarDelCarrito(item.id)} className="btn btn-outline-danger btn-sm border-0" title="Eliminar producto">
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-light">
              <h4 className="fw-bold mb-3" style={{ color: "#123C35" }}>Resumen del Pedido</h4>
              <div className="d-flex justify-content-between align-items-center my-3 pt-2 border-top">
                <span className="fs-5 text-secondary">Total:</span>
                <span className="fs-3 fw-bold" style={{ color: "#123C35" }}>
                  ${totalCarrito?.toLocaleString("es-CL")}
                </span>
              </div>
              <button className="btn text-white w-100 py-2 rounded-3 fw-medium mt-3" style={{ backgroundColor: "#123C35" }}>
                Continuar al Pago
              </button>
            </div>
          </div>
        </div>
      )}
    </PlantillaPublica>
  );
}

export default PaginaCarrito;