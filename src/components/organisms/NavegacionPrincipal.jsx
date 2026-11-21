import { Link } from "react-router-dom";
import Logotipo from "../molecules/Logotipo";
import EnlaceNavegacion from "../atoms/EnlaceNavegacion";
import AccionesNavegacion from "../molecules/AccionesNavegacion";

function NavegacionPrincipal(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container-fluid">
        <Logotipo
          titulo={props.tituloMarca}
          subtitulo={props.subtituloMarca}
          claseIcono={props.iconoMarca}
        />

        <div className="d-flex align-items-center gap-2 flex-wrap">
          {props.enlaces.map((enlace) => (
            <EnlaceNavegacion
              key={enlace.id}
              etiqueta={enlace.etiqueta}
              enlace={enlace.enlace}
              activo={enlace.activo}
              claseIcono={enlace.claseIcono}
            />
          ))}
        </div>

        <div className="d-flex align-items-center gap-2 flex-wrap">
          <AccionesNavegacion
            etiquetaCarrito={props.etiquetaCarrito}
            enlaceCarrito={props.enlaceCarrito}
            activoCarrito={props.activoCarrito}
            claseIconoCarrito={props.claseIconoCarrito}
            textoBoton={props.textoBotonCita}
            varianteBoton={props.varianteBotonCita}
            onClickBoton={props.onClickCita}
          />

          <Link
            to="/iniciar-sesion"
            className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2"
          >
            <i className="bi bi-person-circle"></i>
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavegacionPrincipal;