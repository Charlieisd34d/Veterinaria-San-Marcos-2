import ElementoBarraSuperior from "../molecules/ElementoBarraSuperior";

function BarraSuperior(props) {
  return (
    <div className="bg-light py-2 border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {props.elementos.map((elemento) => (
          <ElementoBarraSuperior
            key={elemento.id}
            claseIcono={elemento.claseIcono}
            texto={elemento.texto}
            enlace={elemento.enlace}
            onNavegar={props.onNavegar}
          />
        ))}
      </div>
    </div>
  );
}

export default BarraSuperior;