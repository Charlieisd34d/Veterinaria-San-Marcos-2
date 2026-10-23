import { useState } from "react";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import SeccionServicios from "../components/organisms/SeccionServicios";
import FormularioCita from "../components/organisms/FormularioCita";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useAutoCierre } from "../hooks/useAutoCierre";

import servicios from "../data/servicios.json";
import mensajes from "../data/mensajes.json";
import datosCita from "../data/formularioCita.json";

function PaginaServicios() {
  const [mensaje, setMensaje] = useState(null);
  const [modalCitaAbierto, setModalCitaAbierto] = useState(false);

  function alCerrarMensaje() {
    setMensaje(null);
  }

  useTituloPagina("Servicios");
  useAutoCierre(mensaje, alCerrarMensaje, mensajes.segundosAutoCierre * 1000);

  function alAgendarCita() {
    setModalCitaAbierto(true);
  }

  return (
    <PlantillaPublica
      mensaje={mensaje}
      onCerrarMensaje={alCerrarMensaje}
    >
      <SeccionServicios
        titulo={servicios.titulo}
        descripcion={servicios.descripcion}
        servicios={servicios.servicios}
        onClickAgendar={alAgendarCita}
      />

      <FormularioCita
        show={modalCitaAbierto}
        onHide={() => setModalCitaAbierto(false)}
        titulo={datosCita.titulo}
        campos={datosCita.campos}
        textoBoton={datosCita.textoBoton}
        varianteBoton={datosCita.varianteBoton}
        onEnviar={(valores) => {
          setModalCitaAbierto(false);
          setMensaje({
            texto: "¡Su solicitud de cita ha sido enviada con éxito!",
            variante: "success"
          });
        }}
      />
    </PlantillaPublica>
  );
}

export default PaginaServicios;