import React from 'react';
import PlantillaInicio from '../components/templates/PlantillaInicio';

const PaginaInicio = () => {
  const datosBarraSuperior = {
    ciudadTelefono: "Rancagua +56 72 223 4488",
    etiquetaAcceso: "Acceso privado"
  };

  const datosNavBar = {
    tituloMarca: "San Marcos",
    subtituloMarca: "CLÍNICA VETERINARIA",
    iconoMarca: "bi bi-heart-fill",
    listaEnlaces: [
      { etiqueta: "Inicio", enlace: "#", activo: true },
      { etiqueta: "Servicios", enlace: "#", activo: false },
      { etiqueta: "Productos", enlace: "#", activo: false },
      { etiqueta: "Nosotros", enlace: "#", activo: false },
      { etiqueta: "Blog", enlace: "#", activo: false },
      { etiqueta: "Contacto", enlace: "#", activo: false }
    ],
    etiquetaCarrito: "Carrito",
    enlaceCarrito: "#",
    etiquetaBotonCita: "Solicitar cita"
  };

  const datosSeccionPrincipal = {
    etiqueta: "VETERINARIA SAN MARCOS",
    titulo: "Cuidamos la salud de tu mascota.",
    descripcion: "Atención veterinaria cercana y profesional en Rancagua. Agenda consultas, revisa nuestros servicios y encuentra productos seleccionados.",
    etiquetaBotonPrimario: "Solicitar una cita",
    etiquetaBotonSecundario: "Ver servicios",
    rutaImagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    textoAlternativoImagen: "Perro en atención veterinaria"
  };

  const datosFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos",
    telefonoContacto: "+56 72 223 4488",
    correoContacto: "contacto@sanmarcos.cl"
  };

  return (
    <PlantillaInicio 
      datosBarraSuperior={datosBarraSuperior}
      datosNavBar={datosNavBar}
      datosSeccionPrincipal={datosSeccionPrincipal}
      datosFooter={datosFooter}
    />
  );
};

export default PaginaInicio;