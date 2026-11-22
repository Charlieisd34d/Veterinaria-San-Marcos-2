import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import CarritoOrganismo from "../components/organisms/CarritoOrganismo";
import { useCarrito } from "../context/CarritoContext";
import { useSolicitudes } from "../context/SolicitudesContext";

export function PaginaCarrito(props) {
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
  const navigate = useNavigate();

  const manejarContinuarPago = () => {
    if (carrito.length === 0) return;

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario_san_marcos") || "null");
    const nombreCliente = usuarioGuardado?.nombre || usuarioGuardado?.correo || "Cliente Tienda Online";
    const resumenProductos = carrito
      .map((item) => `${item.nombre} (x${item.cantidad})`)
      .join(", ");

    crear({
      cliente: nombreCliente,
      servicio: `Pedido Tienda: ${resumenProductos}`,
      fecha: new Date().toISOString().split("T")[0],
      estado: "Pendiente",
      total: totalPrecio
    });

    vaciarCarrito();
    setCompraExitosa(true);
  };

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <CarritoOrganismo
        carrito={carrito}
        totalProductos={totalProductos}
        totalPrecio={totalPrecio}
        compraExitosa={compraExitosa}
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
