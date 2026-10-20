import { useState } from "react";
import PlantillaServicios from "../components/templates/PlantillaServicios";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useAutoCierre } from "../hooks/useAutoCierre";

import barraSuperior from "../data/barraSuperior.json";
import navegacion from "../data/navegacion.json";
import servicios from "../data/servicios.json";
import pie from "../data/piePagina.json";
import mensajes from "../data/mensajes.json";
import PiePagina from "../components/organisms/PiePagina";

function PaginaServicios() {
  const [mensaje, setMensaje] = useState(null);

  function alCerrarMensaje() {
    setMensaje(null);
  }

  useTituloPagina("Servicios");
  useAutoCierre(mensaje, alCerrarMensaje, mensajes.segundosAutoCierre * 1000);

  function alSolicitarServicio(id) {
    const servicio = servicios.servicios.find((s) => s.id === id);
    setMensaje({
      texto: `${mensajes.solicitarServicio.texto} ${servicio.titulo}.`,
      variante: mensajes.solicitarServicio.variante,
    });
  }

  function alAgendarCita() {
    setMensaje(mensajes.agendarCita);
  }

  return (
    <PlantillaServicios
      barraSuperior={barraSuperior}
      navegacion={navegacion}
      servicios={servicios}
      pie={pie}
      mensaje={mensaje}
      textoCerrar={mensajes.textoCerrar}
      onClickCita={alAgendarCita}
      onClickAgendar={alAgendarCita}
      onSolicitarServicio={alSolicitarServicio}
      onCerrarMensaje={alCerrarMensaje}
    />
  );
}

export default PaginaServicios;