import EncabezadoPublico from "../organisms/EncabezadoPublico";
import AvisoPagina from "../organisms/AvisoPagina";
import PiePagina from "../organisms/PiePagina";
import { useNavegacionPublica } from "../../hooks/useNavegacionPublica";

import barraSuperior from "../../data/barraSuperior.json";
import navegacion from "../../data/navegacion.json";
import pie from "../../data/piePagina.json";
import mensajes from "../../data/mensajes.json";

function PlantillaPublica(props) {
  const nav = useNavegacionPublica(navegacion);

  return (
    <div className="d-flex flex-column min-vh-100">
      <EncabezadoPublico
        barraSuperior={barraSuperior}
        navegacion={nav.navegacion}
        onNavegar={nav.navegar}
        onClickCita={props.onClickCita}
      />

      <AvisoPagina
        mensaje={props.mensaje}
        textoCerrar={mensajes.textoCerrar}
        onCerrar={props.onCerrarMensaje}
      />

      <main className="flex-grow-1 py-5">
        <div className="container">{props.children}</div>
      </main>

      <PiePagina
        nombre={pie.nombre}
        descripcion={pie.descripcion}
        contactos={pie.contactos}
        textoDerechos={pie.textoDerechos}
      />
    </div>
  );
}

export default PlantillaPublica;
