import React, { useState } from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioCita from '../components/organisms/FormularioCita';
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import datosFormularioCita from '../data/formularioCita.json';
import serviciosData from '../data/servicios.json';

const CLAVE_CITAS = 'citas_veterinaria_san_marcos';

function guardarCitaEnStorage(nuevaCita) {
  try {
    const actuales = JSON.parse(localStorage.getItem(CLAVE_CITAS) || '[]');
    const listaActualizada = Array.isArray(actuales) ? [...actuales, nuevaCita] : [nuevaCita];
    localStorage.setItem(CLAVE_CITAS, JSON.stringify(listaActualizada));
  } catch (error) {
    // Evita fallos si localStorage no está disponible en algún entorno
  }
}

function PaginaServicios() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');

  function abrirModalParaServicio(tituloServicio) {
    setMensajeConfirmacion('');
    setServicioSeleccionado(tituloServicio);
    setModalAbierto(true);
  }

  function manejarCerrarModal() {
    setModalAbierto(false);
  }

  function manejarEnvioCita(valores) {
    const nuevaCita = {
      id: Date.now(),
      servicio: servicioSeleccionado,
      ...(valores && typeof valores === 'object' ? valores : {}),
      creadaEn: new Date().toISOString(),
    };

    guardarCitaEnStorage(nuevaCita);
    setMensajeConfirmacion(
      `Solicitud de cita registrada para "${servicioSeleccionado}".`
    );
    setModalAbierto(false);
  }

  return (
    <PlantillaPublica>
      <div className="mb-5 text-center">
        <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2 mb-3">
          Servicios veterinarios
        </span>
        <h1 className="display-5 fw-bold text-success-emphasis">
          Atención integral para tu mascota
        </h1>
      </div>

      {mensajeConfirmacion && (
        <div className="alert alert-success mb-4" role="alert">
          {mensajeConfirmacion}
        </div>
      )}

      <div className="row g-4">
        {serviciosData.map(function (servicio) {
          return (
            <div key={servicio.id} className="col-12 col-md-6">
              <TarjetaServicio
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                icono={servicio.icono}
                textoBoton="Reservar servicio"
                onAccion={function () {
                  abrirModalParaServicio(servicio.titulo);
                }}
              />
            </div>
          );
        })}
      </div>

      <FormularioCita
        show={modalAbierto}
        onHide={manejarCerrarModal}
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