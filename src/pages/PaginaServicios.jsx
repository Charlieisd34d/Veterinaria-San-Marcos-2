import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioCita from '../components/organisms/FormularioCita';
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import datosFormularioCita from '../data/formularioCita.json';
import serviciosData from '../data/servicios.json';
import { guardarCita } from '../services/citasService';
import { obtenerSesion } from '../utils/autenticacion';

function obtenerCorreoSesion() {
  const sesion = obtenerSesion();
  const correo = sesion && sesion.usuario ? sesion.usuario.correo : '';
  return typeof correo === 'string' ? correo.trim().toLowerCase() : '';
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
    const correoSesion = obtenerCorreoSesion();
    const correoFinal = ((valores && valores.correo) || correoSesion || '')
      .trim()
      .toLowerCase();

    const nuevaCita = {
      ...valores,
      correo: correoFinal,
      servicioSeleccionado: servicioSeleccionado,
      servicio: valores.servicio || valores.motivo || servicioSeleccionado
    };

    guardarCita(nuevaCita);

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
          <p className="mb-2">{mensajeConfirmacion}</p>
          <Link to="/historial-citas" className="alert-link">
            Ver mi historial de citas
          </Link>
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