// templates/PlantillaNoEncontrada.jsx
import EncabezadoPublico from "../organisms/EncabezadoPublico";
import SeccionNoEncontrada from "../organisms/SeccionNoEncontrada";
import PiePagina from "../organisms/PiePagina";
import { useNavegacionPublica } from "../../hooks/useNavegacionPublica";

function PlantillaNoEncontrada(props) {
  const nav = useNavegacionPublica(props.navegacion);

  return (
    <div className="d-flex flex-column min-vh-100">
      <EncabezadoPublico
        barraSuperior={props.barraSuperior}
        navegacion={nav.navegacion}
        onNavegar={nav.navegar}
        onClickCita={props.onClickCita}
      />

      <main className="flex-grow-1 py-5">
        <div className="container-fluid">
          <SeccionNoEncontrada
            titulo={props.noEncontrada.titulo}
            descripcion={props.noEncontrada.descripcion}
            botonVolver={props.noEncontrada.botonVolver}
            onVolver={props.onVolver}
          />
        </div>
      </main>

      <PiePagina
        nombre={props.pie.nombre}
        descripcion={props.pie.descripcion}
        contactos={props.pie.contactos}
        textoDerechos={props.pie.textoDerechos}
      />
    </div>
  );
}

export default PlantillaNoEncontrada;