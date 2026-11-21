import PlantillaPublica from '../components/templates/PlantillaPublica';
import SeccionContacto from '../components/organisms/SeccionContacto';
import datosContacto from '../data/contacto.json';

const CLAVE_MENSAJES_CONTACTO = 'mensajes_contacto_veterinaria';

function guardarMensajeEnStorage(nuevoMensaje) {
  try {
    const actuales = JSON.parse(localStorage.getItem(CLAVE_MENSAJES_CONTACTO) || '[]');
    const listaActualizada = Array.isArray(actuales)
      ? [...actuales, nuevoMensaje]
      : [nuevoMensaje];
    localStorage.setItem(CLAVE_MENSAJES_CONTACTO, JSON.stringify(listaActualizada));
  } catch (error) {
    // Evita fallos si localStorage no está disponible en algún entorno
  }
}

function PaginaContacto() {
  function manejarEnvio(valores) {
    const nuevoMensaje = {
      id: Date.now(),
      ...(valores && typeof valores === 'object' ? valores : {}),
      enviadoEn: new Date().toISOString(),
    };

    guardarMensajeEnStorage(nuevoMensaje);
  }

  const textoInsignia = datosContacto.insignia || 'Canales de atención';

  return (
    <PlantillaPublica>
      <div className="container pt-4">
        <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 insignia-seccion">
          {textoInsignia}
        </span>
      </div>

      <SeccionContacto
        insignia={textoInsignia}
        titulo={datosContacto.titulo}
        subtitulo={datosContacto.subtitulo}
        infoContacto={datosContacto.infoContacto}
        textoBoton={datosContacto.textoBoton}
        onEnviar={manejarEnvio}
      />
    </PlantillaPublica>
  );
}

export default PaginaContacto;
