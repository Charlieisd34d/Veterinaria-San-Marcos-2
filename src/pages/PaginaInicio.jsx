import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaInicio from "../components/templates/PlantillaPublica";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useAutoCierre } from "../hooks/useAutoCierre";

import barraSuperior from "../data/barraSuperior.json";
import navegacion from "../data/navegacion.json";
import hero from "../data/hero.json";
import pie from "../data/piePagina.json";
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
    <PlantillaInicio
      barraSuperior={barraSuperior}
      navegacion={navegacion}
      hero={hero}
      pie={pie}
      mensaje={mensaje}
      textoCerrar={mensajes.textoCerrar}
      onClickCita={alAgendarCita}
      onClickPrimario={alAgendarCita}
      onClickSecundario={alVerServicios}
      onCerrarMensaje={alCerrarMensaje}
    />
  );
}

export default PaginaInicio;