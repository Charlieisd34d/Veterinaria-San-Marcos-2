import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import SeccionNoEncontrada from "../components/organisms/SeccionNoEncontrada";
import { useTituloPagina } from "../hooks/useTituloPagina";

import noEncontrada from "../data/noEncontrada.json";

function PaginaNoEncontrada() {
  const navigate = useNavigate();

  useTituloPagina("Página no encontrada");

  function alVolver() {
    navigate("/");
  }

  return (
    <PlantillaPublica onClickCita={alVolver}>
      <SeccionNoEncontrada
        titulo={noEncontrada.titulo}
        descripcion={noEncontrada.descripcion}
        botonVolver={noEncontrada.botonVolver}
        onVolver={alVolver}
      />
    </PlantillaPublica>
  );
}

export default PaginaNoEncontrada;