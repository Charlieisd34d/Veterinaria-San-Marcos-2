import { useNavigate } from "react-router-dom";
import PlantillaNoEncontrada from "../components/templates/PlantillaNoEncontrada";
import { useTituloPagina } from "../hooks/useTituloPagina";

import barraSuperior from "../data/barraSuperior.json";
import navegacion from "../data/navegacion.json";
import noEncontrada from "../data/noEncontrada.json";
import pie from "../data/piePagina.json";
import PiePagina from "../components/organisms/PiePagina";

function PaginaNoEncontrada() {
  const navigate = useNavigate();

  useTituloPagina("Página no encontrada");

  function alVolver() {
    navigate("/");
  }

  return (
    <PlantillaNoEncontrada
      barraSuperior={barraSuperior}
      navegacion={navegacion}
      noEncontrada={noEncontrada}
      pie={pie}
      onClickCita={alVolver}
      onVolver={alVolver}
    />
  );
}

export default PaginaNoEncontrada;