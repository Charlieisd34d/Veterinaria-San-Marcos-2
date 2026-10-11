import React, { useState } from 'react';
import PlantillaProductos from '../components/templates/PlantillaProductos';

const PaginaProductos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [notificacion, setNotificacion] = useState(null);

  const categorias = [
    'Todos', 'Antibióticos', 'Antiparasitarios', 'Antiinflamatorios',
    'Dermatología', 'Digestivo', 'Cardíaco', 'Analgésicos', 'Vacunas'
  ];

  const productosData = [
    {
      id: "ME001",
      categoria: "Antibióticos",
      nombre: "Amoxibay 250mg",
      descripcion: "Amoxicilina • Blíster 10 comp. • Perro / Gato",
      precio: 4200,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME002",
      categoria: "Antibióticos",
      nombre: "Enrox 50mg",
      descripcion: "Enrofloxacino • Blíster 10 comp. • Perro / Gato",
      precio: 6800,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME003",
      categoria: "Antibióticos",
      nombre: "Metrobay 250mg",
      descripcion: "Metronidazol • Blíster 10 comp. • Perro / Gato",
      precio: 3900,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME004",
      categoria: "Antiparasitarios",
      nombre: "Nexgard",
      descripcion: "Afoxolaner • Masticable 1 unid. • Perro",
      precio: 9500,
      imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME005",
      categoria: "Antiparasitarios",
      nombre: "Bravecto",
      descripcion: "Fluralaner • Masticable 1 unid. • Perro",
      precio: 18900,
      imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME006",
      categoria: "Antiparasitarios",
      nombre: "Revolution Plus",
      descripcion: "Selamectina+Sarolaner • Pipeta 1 unid. • Gato",
      precio: 14500,
      imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME007",
      categoria: "Antiparasitarios",
      nombre: "Drontal Plus",
      descripcion: "Praziquantel+Pamoato • Comprimido 1 unid. • Perro",
      precio: 3200,
      imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME008",
      categoria: "Antiparasitarios",
      nombre: "Milbemax Gato",
      descripcion: "Milbemicina+Praziq. • Comprimido 2 unid. • Gato",
      precio: 6800,
      imagen: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME009",
      categoria: "Antiinflamatorios",
      nombre: "Meloxicam 1mg",
      descripcion: "Meloxicam • Blíster 10 comp. • Perro / Gato",
      precio: 4500,
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME010",
      categoria: "Antiinflamatorios",
      nombre: "Carprofen 50mg",
      descripcion: "Carprofeno • Blíster 10 comp. • Perro",
      precio: 9800,
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME011",
      categoria: "Dermatología",
      nombre: "Clorhexidina shampoo",
      descripcion: "Clorhexidina 2% • Frasco 250ml • Perro / Gato",
      precio: 8900,
      imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME012",
      categoria: "Dermatología",
      nombre: "Malaseb shampoo",
      descripcion: "Miconazol+Clorhex. • Frasco 250ml • Perro / Gato",
      precio: 12500,
      imagen: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME013",
      categoria: "Dermatología",
      nombre: "Apoquel 16mg",
      descripcion: "Oclacitinib • Blíster 10 comp. • Perro",
      precio: 22000,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME014",
      categoria: "Digestivo",
      nombre: "Probifor",
      descripcion: "Bacillus clausii • Sobre 5ml x10 • Perro / Gato",
      precio: 5600,
      imagen: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME015",
      categoria: "Digestivo",
      nombre: "Omeprazol 10mg vet",
      descripcion: "Omeprazol • Blíster 10 comp. • Perro / Gato",
      precio: 3800,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME016",
      categoria: "Cardíaco",
      nombre: "Vetmedin 2.5mg",
      descripcion: "Pimobendan • Blíster 10 comp. • Perro",
      precio: 28000,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME017",
      categoria: "Analgésicos",
      nombre: "Tramadol 50mg vet",
      descripcion: "Tramadol • Blíster 10 comp. • Perro",
      precio: 5200,
      imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: "ME018",
      categoria: "Vacunas",
      nombre: "Nobivac DHPPi",
      descripcion: "Vacuna polivalente • Vial 1 dosis • Perro",
      precio: 8500,
      imagen: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=500"
    }
  ];

  const productosFiltrados = categoriaActiva === 'Todos'
    ? productosData
    : productosData.filter(p => p.categoria === categoriaActiva);

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(valor);
  };

  const manejarAgregarProducto = (producto) => {
    setNotificacion(`Añadido: ${producto.nombre}`);
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
      { etiqueta: "Blog", enlace: "/blog", activo: false },
      { etiqueta: "Contacto", enlace: "/contacto", activo: false }
    ],
    etiquetaCarrito: "Carrito",
    enlaceCarrito: "#",
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

export default PaginaProductos;
