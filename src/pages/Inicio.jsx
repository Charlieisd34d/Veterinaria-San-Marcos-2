import React from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import EtiquetaSeccion from '../components/atoms/EtiquetaSeccion';
import TituloPrincipal from '../components/atoms/TituloPrincipal';
import Parrafo from '../components/atoms/Parrafo';
import Boton from '../components/atoms/Boton';
import Imagen from '../components/atoms/Imagen';

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
      { etiqueta: "Inicio", enlace: "/", activo: true },
      { etiqueta: "Servicios", enlace: "/servicios", activo: false },
      { etiqueta: "Productos", enlace: "/productos", activo: false },
      { etiqueta: "Nosotros", enlace: "/nosotros", activo: false },
      { etiqueta: "Blog", enlace: "/blog", activo: false },
      { etiqueta: "Contacto", enlace: "/contacto", activo: false }
    ],
    etiquetaCarrito: "Carrito",
    enlaceCarrito: "/carrito",
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
    <PlantillaPublica 
      datosBarraSuperior={datosBarraSuperior}
      datosNavBar={datosNavBar}
      datosFooter={datosFooter}
    >
      {/* Todo el contenido de inicio entra aquí como children */}
      <section className="row align-items-center g-4">
        <div className="col-lg-6">
          {datosSeccionPrincipal.etiqueta && (
            <EtiquetaSeccion texto={datosSeccionPrincipal.etiqueta} />
          )}

          <TituloPrincipal texto={datosSeccionPrincipal.titulo} />

          <Parrafo texto={datosSeccionPrincipal.descripcion} />

          <div className="d-flex gap-3 mt-4">
            <Boton
              etiqueta={datosSeccionPrincipal.etiquetaBotonPrimario}
              variante="success"
              alHacerClic={() => console.log("Cita")}
            />

            {datosSeccionPrincipal.etiquetaBotonSecundario && (
              <Boton
                etiqueta={datosSeccionPrincipal.etiquetaBotonSecundario}
                variante="outline-success"
                alHacerClic={() => console.log("Servicios")}
              />
            )}
          </div>
        </div>

        <div className="col-lg-6 text-center">
          <Imagen
            ruta={datosSeccionPrincipal.rutaImagen}
            textoAlternativo={datosSeccionPrincipal.textoAlternativoImagen}
          />
        </div>
      </section>
    </PlantillaPublica>
  );
};

export default PaginaInicio;