import PlantillaCarrito from '../components/templates/PlantillaCarrito';
import { useCarrito } from '../context/CarritoContext';

const CarritoPage = () => {
  const {
    carrito,
    actualizarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalPrecio,
    totalProductos
  } = useCarrito();

  const datosBarraSuperior = {
    ciudadTelefono: "Rancagua +56 9 7222 3448",
    etiquetaAcceso: "Acceso privado"
  };

  const datosNavBar = {
    tituloMarca: "San Marcos",
    subtituloMarca: "CLÍNICA VETERINARIA",
    iconoMarca: "bi bi-heart-fill",
    listaEnlaces: [
      { etiqueta: "Inicio", enlace: "/", activo: false },
      { etiqueta: "Servicios", enlace: "/servicios", activo: false },
      { etiqueta: "Productos", enlace: "/productos", activo: false },
      { etiqueta: "Nosotros", enlace: "/nosotros", activo: false },
      { etiqueta: "Contacto", enlace: "/contacto", activo: false }
    ],
    etiquetaCarrito: `Carrito (${totalProductos})`,
    enlaceCarrito: "/carrito",
    etiquetaBotonCita: "Solicitar cita"
  };

  const datosFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos",
    telefonoContacto: "+56 9 7222 3448",
    correoContacto: "contacto@sanmarcos.cl"
  };

  return (
    <PlantillaCarrito
      datosBarraSuperior={datosBarraSuperior}
      datosNavBar={datosNavBar}
      datosFooter={datosFooter}
      carritoProps={{
        carrito,
        actualizarCantidad,
        eliminarDelCarrito,
        vaciarCarrito,
        totalPrecio
      }}
    />
  );
};

export default CarritoPage;