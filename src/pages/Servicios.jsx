import React from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaServicios from '../components/organisms/ListaServicios';
import serviciosData from '../data/servicios.json';

const Servicios = () => {
  const infoBarraSuperior = {
    ciudadTelefono: "Rancagua • +56 72 223 4488",
    etiquetaAcceso: "Acceso privado"
  };

  const infoNavbar = {
    tituloMarca: "San Marcos",
    subtituloMarca: "CLÍNICA VETERINARIA",
    iconoMarca: "bi bi-heart-fill",
    listaEnlaces: [
      { etiqueta: "Inicio", enlace: "/" },
      { etiqueta: "Servicios", enlace: "/servicios", activo: true },
      { etiqueta: "Productos", enlace: "/productos" },
      { etiqueta: "Nosotros", enlace: "/nosotros" },
      { etiqueta: "Blog", enlace: "/blog" },
      { etiqueta: "Contacto", enlace: "/contacto" }
    ],
    etiquetaCarrito: "Carrito",
    enlaceCarrito: "/carrito",
    activoCarrito: false,
    etiquetaBotonCita: "Solicitar cita",
    alHacerClicCita: () => console.log("Clic en Solicitar cita")
  };

  const infoFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos. Todos los derechos reservados.",
    telefonoContacto: "+56 72 223 4488",
    correoContacto: "contacto@sanmarcos.cl"
  };

  return (
    <PlantillaPublica
      datosBarraSuperior={infoBarraSuperior}
      datosNavBar={infoNavbar}
      datosFooter={infoFooter}
    >
      <ListaServicios 
        servicios={serviciosData} 
        alHacerClicAgendar={() => console.log("Ir a agendar atención")} 
      />
    </PlantillaPublica>
  );
};

export default Servicios;