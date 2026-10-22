import { useState } from "react";
import Logotipo from "../molecules/Logotipo";
import EnlaceNavegacion from "../atoms/EnlaceNavegacion";
import Boton from "../atoms/Boton";
import AccionesNavegacion from "../molecules/AccionesNavegacion";
import ModalComun from "../molecules/ModalComun";
import FormularioLogin from "./FormularioLogin";

import datosLogin from "../../data/admin/formularioLogin.json";

function NavegacionPrincipal(props) {
  const [mostrarModal, setMostrarModal] = useState(false);

  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <Logotipo
            titulo={props.tituloMarca}
            subtitulo={props.subtituloMarca}
            claseIcono={props.iconoMarca}
          />

          <div className="d-flex align-items-center gap-2">
            {props.enlaces.map((enlace) => (
              <EnlaceNavegacion
                key={enlace.id}
                etiqueta={enlace.etiqueta}
                enlace={enlace.enlace}
                activo={enlace.activo}
                claseIcono={enlace.claseIcono}
                onClick={(evento) => ir(evento, enlace.enlace)}
              />
            ))}
          </div>

          <div className="d-flex align-items-center gap-2">
            <AccionesNavegacion
              etiquetaCarrito={props.etiquetaCarrito}
              enlaceCarrito={props.enlaceCarrito}
              activoCarrito={props.activoCarrito}
              claseIconoCarrito={props.claseIconoCarrito}
              onClickCarrito={(evento) => ir(evento, props.enlaceCarrito)}
              textoBoton={props.textoBotonCita}
              varianteBoton={props.varianteBotonCita}
              onClickBoton={props.onClickCita}
            />

            <Boton
              tipo="button"
              texto="Iniciar Sesión"
              variante="outline-secondary"
              onClick={() => setMostrarModal(true)}
            />
          </div>
        </div>
      </nav>

      <ModalComun
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        titulo={datosLogin.titulo}
      >
        <FormularioLogin
          titulo={datosLogin.titulo}
          campos={datosLogin.campos}
          textoBoton={datosLogin.textoBoton}
          varianteBoton={datosLogin.varianteBoton}
          onEnviar={(valores) => {
            console.log("Datos ingresados:", valores);
            setMostrarModal(false);
            if (props.onNavegar) {
              props.onNavegar("/admin");
            } else {
              window.location.href = "/admin";
            }
          }}
        />
      </ModalComun>
    </>
  );
}

export default NavegacionPrincipal;