import { useState } from "react";
import EncabezadoPublico from "../organisms/EncabezadoPublico";
import AvisoPagina from "../organisms/AvisoPagina";
import PiePagina from "../organisms/PiePagina";
import FormularioLogin from "../organisms/FormularioLogin";
import { useNavegacionPublica } from "../../hooks/useNavegacionPublica";
import { useSesion } from "../../context/SesionContext";

import barraSuperior from "../../data/barraSuperior.json";
import navegacion from "../../data/navegacion.json";
import pie from "../../data/piePagina.json";
import mensajes from "../../data/mensajes.json";
import datosLogin from "../../data/formularioLogin.json";

function PlantillaPublica(props) {
  const nav = useNavegacionPublica(navegacion);
  const [modalLoginAbierto, setModalLoginAbierto] = useState(false);
  const { usuarioLogueado, iniciarSesion, cerrarSesion } = useSesion();

  return (
    <div className="d-flex flex-column min-vh-100">
      <EncabezadoPublico
        barraSuperior={barraSuperior}
        navegacion={nav.navegacion}
        onNavegar={nav.navegar}
        onClickLogin={() => setModalLoginAbierto(true)}
        usuarioLogueado={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
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

      <FormularioLogin
        show={modalLoginAbierto}
        onHide={() => setModalLoginAbierto(false)}
        titulo={datosLogin.titulo}
        campos={datosLogin.campos}
        textoBoton={datosLogin.textoBoton}
        varianteBoton={datosLogin.varianteBoton}
        onEnviar={(valores) => {
          iniciarSesion(valores);
          setModalLoginAbierto(false);
        }}
      />
    </div>
  );
}

export default PlantillaPublica;