import PlantillaPublica from "../components/templates/PlantillaPublica";
import SeccionContacto from "../components/organisms/SeccionContacto";
import datosContacto from "../data/contacto.json";

export default function PaginaContacto() {
  const manejarEnvio = (valores) => {

  };

  return (
    <PlantillaPublica>
      <SeccionContacto
        titulo={datosContacto.titulo}
        subtitulo={datosContacto.subtitulo}
        infoContacto={datosContacto.infoContacto}
        textoBoton={datosContacto.textoBoton}
        onEnviar={manejarEnvio}
      />
    </PlantillaPublica>
  );
}