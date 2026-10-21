// organisms/NavegacionPrincipal.jsx
import Logotipo from "../molecules/Logotipo";
import EnlaceNavegacion from "../atoms/EnlaceNavegacion";
import AccionesNavegacion from "../molecules/AccionesNavegacion";

function NavegacionPrincipal(props) {
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
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

        <AccionesNavegacion
          etiquetaCarrito={props.etiquetaCarrito}
          enlaceCarrito={props.enlaceCarrito}
          activoCarrito={props.activoCarrito}
          claseIconoCarrito={props.claseIconoCarrito}
          onClickCarrito={(evento) => ir(evento, props.enlaceCarrito)}
          textoBoton={props.textoBotonCita}
          varianteBoton={props.varianteBotonCita}
          onClickBoton={() => {
            if (props.onClickCita) {
              props.onClickCita();
            } else if (props.onNavegar) {
              props.onNavegar('/solicitar-cita');
          }
      }}
    />
      </div>
    </nav>
  );
}

export default NavegacionPrincipal;