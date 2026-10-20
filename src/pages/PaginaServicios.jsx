import { useState } from "react";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import SeccionServicios from "../components/organisms/SeccionServicios";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useAutoCierre } from "../hooks/useAutoCierre";

import servicios from "../data/servicios.json";
import mensajes from "../data/mensajes.json";

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
    <PlantillaPublica
      mensaje={mensaje}
      onClickCita={alAgendarCita}
      onCerrarMensaje={alCerrarMensaje}
    >
      <SeccionServicios
        titulo={servicios.titulo}
        descripcion={servicios.descripcion}
        servicios={servicios.servicios}
        textoBotonServicio={servicios.textoBotonServicio}
        botonAgendar={servicios.botonAgendar}
        onSolicitar={alSolicitarServicio}
        onClickAgendar={alAgendarCita}
      />
    </PlantillaPublica>
  );
}

export default PaginaServicios;