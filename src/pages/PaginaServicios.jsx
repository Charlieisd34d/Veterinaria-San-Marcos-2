import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import FormularioCita from '../components/organisms/FormularioCita';
import TarjetaServicio from '../components/molecules/TarjetaServicio';
import datosFormularioCita from '../data/formularioCita.json';
import serviciosData from '../data/servicios.json';
import { guardarCita } from '../services/citasService';
import { obtenerClienteCitas } from '../utils/clienteCitas';
import { useClienteCitas } from '../hooks/useClienteCitas';
import { useTituloPagina } from '../hooks/useTituloPagina';

function PaginaServicios() {
  useTituloPagina('Servicios');
  const cliente = useClienteCitas();
  const [solicitud, setSolicitud] = useState(null);
  const [confirmacion, setConfirmacion] = useState(null);
  const clienteId = cliente ? String(cliente.id) : null;

  useEffect(() => {
    function alCambiarSesion(evento) {
      if (evento.key !== null && evento.key !== 'admin_autenticado') return;
      setSolicitud(null);
      setConfirmacion(null);
    }
    window.addEventListener('storage', alCambiarSesion);
    return () => window.removeEventListener('storage', alCambiarSesion);
  }, []);

  function abrirModalParaServicio(tituloServicio) {
    const clienteActual = obtenerClienteCitas();
    if (!clienteActual || String(clienteActual.id) !== clienteId) return;

    setConfirmacion(null);
    setSolicitud({
      clienteId,
      correo: clienteActual.correo,
      servicio: tituloServicio,
    });
  }

  function manejarEnvioCita(valores) {
    guardarCita({
      ...valores,
      servicioSeleccionado: solicitud.servicio,
    }, solicitud.clienteId);

    setConfirmacion(solicitud);
    setSolicitud(null);
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

      {clienteId && confirmacion?.clienteId === clienteId && (
        <div className="alert alert-success mb-4" role="alert">
          <p className="mb-2">Solicitud de cita registrada para «{confirmacion.servicio}».</p>
          <Link to="/historial-citas" className="alert-link">
            Ver mi historial de citas
          </Link>
        </div>
      )}

      {!cliente && (
        <div className="alert alert-info">
          Para reservar un servicio, <Link to="/iniciar-sesion" className="alert-link">inicia sesión con una cuenta de cliente</Link>.
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
                onAccion={cliente ? () => abrirModalParaServicio(servicio.titulo) : undefined}
              />
            </div>
          );
        })}
      </div>

      {solicitud && (!clienteId || solicitud.clienteId === clienteId) && (
        <FormularioCita
          show
          onHide={() => setSolicitud(null)}
          titulo={`${datosFormularioCita.titulo}: ${solicitud.servicio}`}
          campos={datosFormularioCita.campos}
          correoInicial={solicitud.correo}
          textoBoton={datosFormularioCita.textoBoton}
          varianteBoton={datosFormularioCita.varianteBoton}
          onEnviar={manejarEnvioCita}
        />
      )}
    </PlantillaPublica>
  );
}

export default PaginaServicios;