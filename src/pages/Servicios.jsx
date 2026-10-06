import React from 'react';

// Imports de tus componentes
import TituloPrincipal from '../components/atoms/TituloPrincipal';
import Parrafo from '../components/atoms/Parrafo';
import Boton from '../components/atoms/Boton';
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import BarraSuperior from '../components/organisms/BarraSuperior';
import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

// Lista de enlaces para el menú de navegación
const enlacesNavegacion = [
  { etiqueta: 'Inicio', enlace: '/', activo: false },
  { etiqueta: 'Servicios', enlace: '/servicios', activo: true },
  { etiqueta: 'Productos', enlace: '/productos', activo: false },
  { etiqueta: 'Nosotros', enlace: '/nosotros', activo: false },
  { etiqueta: 'Blog', enlace: '/blog', activo: false },
  { etiqueta: 'Contacto', enlace: '/contacto', activo: false }
];

// Lista de servicios con iconos de Bootstrap Icons
const serviciosData = [
  {
    id: 1,
    titulo: 'Consulta general',
    descripcion: 'Evaluación integral, diagnóstico y seguimiento para cuidar su salud en cada etapa.',
    claseIcono: 'bi bi-heart'
  },
  {
    id: 2,
    titulo: 'Vacunación',
    descripcion: 'Calendario personalizado y recordatorios para que ninguna vacuna quede pendiente.',
    claseIcono: 'bi bi-syringe'
  },
  {
    id: 3,
    titulo: 'Cirugía menor',
    descripcion: 'Procedimientos seguros con un equipo experimentado y acompañamiento cercano.',
    claseIcono: 'bi bi-shield-check'
  },
  {
    id: 4,
    titulo: 'Bienestar preventivo',
    descripcion: 'Desparasitación, control de peso y hábitos para una vida larga y saludable.',
    claseIcono: 'bi bi-activity'
  },
  {
    id: 5,
    titulo: 'Ficha clínica digital',
    descripcion: 'Registro organizado de consultas, diagnósticos, medicamentos y próximos controles.',
    claseIcono: 'bi bi-file-earmark-medical'
  },
  {
    id: 6,
    titulo: 'Solicitud de citas',
    descripcion: 'Solicita una hora en línea y recibe la confirmación de nuestra recepción.',
    claseIcono: 'bi bi-calendar-event'
  }
];

function Servicios() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* 1. Barra superior */}
      <BarraSuperior 
        ciudadTelefono="Rancagua · +56 72 223 4488" 
        etiquetaAcceso="Acceso privado" 
      />

      {/* 2. Navegación Principal */}
      <NavBar 
        tituloMarca="San Marcos" 
        subtituloMarca="CLÍNICA VETERINARIA" 
        iconoMarca="bi bi-heart-fill" 
        listaEnlaces={enlacesNavegacion} 
        etiquetaCarrito="Carrito" 
        enlaceCarrito="/carrito" 
        activoCarrito={false} 
        etiquetaBotonCita="Solicitar cita" 
        alHacerClicCita={() => alert('Solicitar cita')} 
      />

      {/* 3. Contenido Principal / Grilla de Servicios */}
      <main className="container my-5 flex-grow-1" style={{ maxWidth: '980px' }}>
        <div className="mb-4">
          <TituloPrincipal texto="Servicios veterinarios" />
          <Parrafo 
            texto="Atenciones esenciales para prevenir, diagnosticar y tratar problemas de salud." 
            clasePersonalizada="text-secondary fs-6 mb-4"
          />
        </div>

        {/* Grilla responsiva de Bootstrap (1 col en celular, 2 cols en tablet/escritorio) */}
        <div className="row g-4">
          {serviciosData.map((servicio) => (
            <div key={servicio.id} className="col-12 col-md-6">
              <TarjetaServicio 
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                claseIcono={servicio.claseIcono}
              />
            </div>
          ))}
        </div>

        {/* Botón de acción al pie de la grilla */}
        <div className="mt-4">
          <Boton 
            texto="Agendar atención" 
            variante="success" 
            onClick={() => alert('Agendando atención...')} 
          />
        </div>
      </main>

      {/* 4. Pie de Página */}
      <Footer 
        textoDerechos="© 2025 Veterinaria San Marcos" 
        telefonoContacto="+56 72 223 4488" 
        correoContacto="contacto@sanmarcos.cl" 
      />

    </div>
  );
}

export default Servicios;