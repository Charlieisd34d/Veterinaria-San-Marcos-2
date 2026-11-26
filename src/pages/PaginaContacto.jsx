import PlantillaPublica from '../components/templates/PlantillaPublica';
import SeccionContacto from '../components/organisms/SeccionContacto';
import datosContacto from '../data/contacto.json';
import { guardarMensajeContacto } from '../services/contactoService';

function PaginaContacto() {
  const textoInsignia = datosContacto.insignia || 'Canales de atención';

  return (
    <PlantillaPublica>
      <div className="container pt-4">
        <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 insignia-seccion">
          {textoInsignia}
        </span>
      </div>

      <SeccionContacto
        titulo={datosContacto.titulo}
        subtitulo={datosContacto.subtitulo}
        infoContacto={datosContacto.infoContacto}
        textoBoton={datosContacto.textoBoton}
        onEnviar={guardarMensajeContacto}
      />
    </PlantillaPublica>
  );
}

export default PaginaContacto;
