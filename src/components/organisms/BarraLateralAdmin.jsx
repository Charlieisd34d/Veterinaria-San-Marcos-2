import Logotipo from "../molecules/Logotipo";
import EnlaceNavegacion from "../atoms/EnlaceNavegacion";

function BarraLateralAdmin(props) {
  function ir(evento, ruta) {
    evento.preventDefault();
    props.onNavegar(ruta);
  }

  return (
    <aside className="bg-white border-end p-3 d-flex flex-column" style={{ width: "240px" }}>
      <Logotipo
        titulo={props.tituloMarca}
        subtitulo={props.subtituloMarca}
        claseIcono={props.iconoMarca}
      />

      <nav className="nav flex-column gap-1 mt-4">
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
      </nav>

      <div className="mt-auto pt-3 border-top">
        <EnlaceNavegacion
          etiqueta={props.volver.etiqueta}
          enlace={props.volver.enlace}
          claseIcono={props.volver.claseIcono}
          onClick={(evento) => ir(evento, props.volver.enlace)}
        />
      </div>
    </aside>
  );
}

export default BarraLateralAdmin;