import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import SeccionHero from "../components/organisms/SeccionHero";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useAutoCierre } from "../hooks/useAutoCierre";

import hero from "../data/hero.json";
import mensajes from "../data/mensajes.json";

function PaginaInicio() {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(null);

  function alCerrarMensaje() {
    setMensaje(null);
  }

  useTituloPagina("Inicio");
  useAutoCierre(mensaje, alCerrarMensaje, mensajes.segundosAutoCierre * 1000);

  function alAgendarCita() {
    setMensaje(mensajes.agendarCita);
  }

  function alVerServicios() {
    navigate("/servicios");
  }

  return (
    <PlantillaPublica
      mensaje={mensaje}
      onClickCita={alAgendarCita}
      onCerrarMensaje={alCerrarMensaje}
    >
      <SeccionHero
        etiqueta={hero.etiqueta}
        titulo={hero.titulo}
        descripcion={hero.descripcion}
        botonPrimario={hero.botonPrimario}
        botonSecundario={hero.botonSecundario}
        rutaImagen={hero.rutaImagen}
        textoAlternativo={hero.textoAlternativo}
        onClickPrimario={alAgendarCita}
        onClickSecundario={alVerServicios}
      />
    </PlantillaPublica>
  );
}

export default PaginaInicio;