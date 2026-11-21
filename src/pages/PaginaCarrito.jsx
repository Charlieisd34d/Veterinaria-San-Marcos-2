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
  const [procesando, setProcesando] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const manejarContinuarPago = async () => {
    if (carrito.length === 0 || procesando) return;

    setError("");
    setProcesando(true);

    try {
      const sesionAdmin = JSON.parse(localStorage.getItem("admin_autenticado") || "null");
      const usuarioGuardado = JSON.parse(localStorage.getItem("usuario_san_marcos") || "null");
      const usuarioActivo = sesionAdmin || usuarioGuardado;

      const nombreCliente =
        usuarioActivo?.nombre || usuarioActivo?.correo || "Cliente Tienda Online";

      const resumenProductos = carrito
        .map((item) => `${item.nombre} (x${item.cantidad})`)
        .join(", ");

      await crear({
        cliente: nombreCliente,
        servicio: `Pedido Tienda: ${resumenProductos}`,
        fecha: new Date().toISOString().split("T")[0],
        estado: "Pendiente",
        total: totalPrecio
      });

      vaciarCarrito();
      setCompraExitosa(true);
    } catch (err) {
      const mensajeApi =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        (err?.code === "ERR_NETWORK"
          ? "No se pudo conectar con el servidor para registrar tu pedido. Verifica que el backend esté activo."
          : "Ocurrió un error al confirmar tu pedido. Intenta nuevamente.");
      setError(mensajeApi);
    } finally {
      setProcesando(false);
    }
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
        procesando={procesando}
        error={error}
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
