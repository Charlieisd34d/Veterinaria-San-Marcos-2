import EncabezadoPublico from "../organisms/EncabezadoPublico";
import AvisoPagina from "../organisms/AvisoPagina";
import SeccionServicios from "../organisms/SeccionServicios";
import PiePagina from "../organisms/PiePagina";
import { useNavegacionPublica } from "../../hooks/useNavegacionPublica";

function PlantillaServicios(props) {
  const nav = useNavegacionPublica(props.navegacion);

  return (
    <div className="d-flex flex-column min-vh-100">
      <EncabezadoPublico
        barraSuperior={props.barraSuperior}
        navegacion={nav.navegacion}
        onNavegar={nav.navegar}
        onClickCita={props.onClickCita}
      />

      <AvisoPagina
        mensaje={props.mensaje}
        textoCerrar={props.textoCerrar}
        onCerrar={props.onCerrarMensaje}
      />

      <main className="flex-grow-1 py-5">
        <div className="container-fluid">
          <SeccionServicios
            titulo={props.servicios.titulo}
            descripcion={props.servicios.descripcion}
            servicios={props.servicios.servicios}
            textoBotonServicio={props.servicios.textoBotonServicio}
            botonAgendar={props.servicios.botonAgendar}
            onSolicitar={props.onSolicitarServicio}
            onClickAgendar={props.onClickAgendar}
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

export default PlantillaServicios;