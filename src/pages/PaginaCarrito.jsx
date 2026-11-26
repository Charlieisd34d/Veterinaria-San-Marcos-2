import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import CarritoOrganismo from "../components/organisms/CarritoOrganismo";
import { useCarrito } from "../context/CarritoContext";
import { useSolicitudes } from "../context/SolicitudesContext";
import { obtenerSesion } from "../utils/autenticacion";

export function PaginaCarrito() {
  const {
    carrito,
    actualizarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalProductos,
    totalPrecio
  } = useCarrito();
  const { crear } = useSolicitudes();
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [errorPedido, setErrorPedido] = useState(false);
  const navigate = useNavigate();

  const manejarContinuarPago = () => {
    if (carrito.length === 0) return;

    const usuario = obtenerSesion()?.usuario;
    const usuarioGuardado = usuario?.rol === "CLIENTE" ? usuario : null;
    const nombreCliente = usuarioGuardado?.nombre || usuarioGuardado?.correo || "Cliente Tienda Online";
    const resumenProductos = carrito
      .map((item) => `${item.nombre} (x${item.cantidad})`)
      .join(", ");

    try {
      crear({
        cliente: nombreCliente,
        servicio: `Pedido Tienda: ${resumenProductos}`,
        fecha: new Date().toISOString().split("T")[0],
        estado: "Pendiente",
        total: totalPrecio
      });
    } catch {
      setErrorPedido(true);
      return;
    }

    setErrorPedido(false);
    vaciarCarrito();
    setCompraExitosa(true);
  };

  return (
    <PlantillaPublica>
      <CarritoOrganismo
        carrito={carrito}
        totalProductos={totalProductos}
        totalPrecio={totalPrecio}
        compraExitosa={compraExitosa}
        errorPedido={errorPedido}
        onActualizarCantidad={actualizarCantidad}
        onEliminar={eliminarDelCarrito}
        onVaciar={vaciarCarrito}
        onContinuarPago={manejarContinuarPago}
        onIrTienda={() => navigate("/productos")}
      />
    </PlantillaPublica>
  );
}

export default PaginaCarrito;
