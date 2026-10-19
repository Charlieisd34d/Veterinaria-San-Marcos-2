import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PlantillaDetalleProducto from '../components/templates/PlantillaDetalleProducto';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';
import { formatearPrecio } from '../utils/formatoPrecio';

const DetalleProducto = () => {
  const { id } = useParams();
  const { productos } = useProductos();
  const { agregarAlCarrito } = useCarrito();
  const [notificacion, setNotificacion] = useState(null);

  const producto = productos.find((p) => String(p.id) === String(id));

  const manejarAgregarProducto = (prod) => {
    agregarAlCarrito(prod);
    setNotificacion(`Añadido al carrito: ${prod.nombre}`);
    setTimeout(() => {
      setNotificacion(null);
    }, 3000);
  };

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
      { etiqueta: "Productos", enlace: "/productos", activo: true },
      { etiqueta: "Nosotros", enlace: "/nosotros", activo: false },
      { etiqueta: "Contacto", enlace: "/contacto", activo: false }
    ],
    enlaceCarrito: "/carrito",
    etiquetaBotonCita: "Solicitar cita"
  };

  const datosFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos",
    telefonoContacto: "+56 9 7222 3448",
    correoContacto: "contacto@sanmarcos.cl"
  };

  return (
    <PlantillaDetalleProducto
      datosBarraSuperior={datosBarraSuperior}
      datosNavBar={datosNavBar}
      datosFooter={datosFooter}
      producto={producto}
      formatearPrecio={formatearPrecio}
      alAgregarProducto={manejarAgregarProducto}
      notificacion={notificacion}
    />
  );
};

export default DetalleProducto;