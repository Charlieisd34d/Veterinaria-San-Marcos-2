import React, { useState } from 'react';
import PlantillaPublica from "../components/templates/PlantillaPublica";
import FormularioCita from "../components/organisms/FormularioCita";
import TarjetaServicio from "../components/molecules/TarjetaServicio";
import datosFormularioCita from "../data/formularioCita.json";

const serviciosData = [
  {
    id: 1,
    titulo: "Consulta general",
    descripcion: "Evaluación integral, diagnóstico y seguimiento para cuidar la salud de tu mascota.",
    icono: "bi bi-heart",
  },
  {
    id: 2,
    titulo: "Vacunación",
    descripcion: "Calendario personalizado para mantener todas las vacunas al día con seguridad.",
    icono: "bi bi-syringe",
  },
  {
    id: 3,
    titulo: "Cirugía menor",
    descripcion: "Procedimientos seguros con cuidado profesional y acompañamiento cercano.",
    icono: "bi bi-shield-check",
  },
  {
    id: 4,
    titulo: "Bienestar preventivo",
    descripcion: "Desparasitación, control de peso y hábitos para una vida larga y saludable.",
    icono: "bi bi-activity",
  },
];

function PaginaServicios() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [servicioSeleccionado, sethServicioSeleccionado] = useState('');

  const abrirModalParaServicio = (tituloServicio) => {
    sethServicioSeleccionado(tituloServicio);
    setModalAbierto(true);
  };

  const manejarEnvioCita = (valores) => {
    setModalAbierto(false);
  };

  return (
    <PlantillaPublica>
      <div className="mb-5 text-center">
        <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2 mb-3">
          Servicios veterinarios
        </span>
        <h1 className="display-5 fw-bold" style={{ color: "#123C35" }}>
          Atención integral para tu mascota
        </h1>
      </div>

      <div className="row g-4">
        {serviciosData.map((servicio) => (
          <div key={servicio.id} className="col-12 col-md-6">
            <TarjetaServicio 
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              icono={servicio.icono}
              textoBoton="Reservar servicio"
              onSolicitar={() => abrirModalParaServicio(servicio.titulo)}
            />
          </div>
        ))}
      </div>

      <FormularioCita 
        show={modalAbierto}
        onHide={() => setModalAbierto(false)}
        titulo={`${datosFormularioCita.titulo}: ${servicioSeleccionado}`}
        campos={datosFormularioCita.campos}
        textoBoton={datosFormularioCita.textoBoton}
        varianteBoton={datosFormularioCita.varianteBoton}
        onEnviar={manejarEnvioCita}
      />
    </PlantillaPublica>
  );
}

export default PaginaServicios;