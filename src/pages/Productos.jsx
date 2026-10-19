import { useState } from 'react';
import PlantillaProductos from '../components/templates/PlantillaProductos';
import { useProductos } from '../context/ProductosContext';
import { useCarrito } from '../context/CarritoContext';
import { formatearPrecio } from '../utils/formatoPrecio';

const Productos = () => {
  const { productos } = useProductos();
  const { agregarAlCarrito } = useCarrito();
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [notificacion, setNotificacion] = useState(null);

  const categorias = [
    'Todos', 'Antibióticos', 'Antiparasitarios', 'Antiinflamatorios', 'Dermatología'
  ];

  const listaProductos = productos || [];

  const productosFiltrados = categoriaActiva === 'Todos'
    ? listaProductos
    : listaProductos.filter(p => p.categoria === categoriaActiva);

  const manejarAgregarProducto = (producto) => {
    agregarAlCarrito(producto);
    setNotificacion(`Añadido: ${producto.nombre}`);
    setTimeout(() => setNotificacion(null), 3000);
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
    enlaceCarrito: "/carrito", // Simplemente enviamos la ruta
    etiquetaBotonCita: "Solicitar cita"
  };

  const datosSeccionProductos = {
    titulo: "Productos",
    subtitulo: "Medicamentos, vacunas y artículos de salud para el bienestar de tu mascota.",
    categorias: categorias,
    categoriaActiva: categoriaActiva,
    alSeleccionarCategoria: setCategoriaActiva,
    productos: productosFiltrados,
    formatearPrecio: formatearPrecio,
    alAgregarProducto: manejarAgregarProducto,
    notificacion: notificacion
  };

  const datosFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos",
    telefonoContacto: "+56 9 7222 3448",
    correoContacto: "contacto@sanmarcos.cl"
  };

  return (
    <PlantillaProductos
      datosBarraSuperior={datosBarraSuperior}
      datosNavBar={datosNavBar}
      datosSeccionProductos={datosSeccionProductos}
      datosFooter={datosFooter}
    />
  );
};

export default Productos;