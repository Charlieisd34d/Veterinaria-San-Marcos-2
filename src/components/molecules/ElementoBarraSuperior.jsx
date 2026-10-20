import React from 'react';
import IconoTexto from "../atoms/IconoTexto";

function ElementoBarraSuperior(props) {
    if (props.enlace) {
    return (
      <a
        href={props.enlace}
        className="text-decoration-none text-muted"
        onClick={(e) => {
          e.preventDefault();
          if (props.onNavegar) {
            props.onNavegar(props.enlace);
          }
        }}
      >
        <IconoTexto
          claseIcono={props.claseIcono}
          texto={props.texto}
        />
      </a>
    );
  }
  return (
    <IconoTexto
      claseIcono={props.claseIcono}
      texto={props.texto}
    />
  );
}

export default ElementoBarraSuperior;