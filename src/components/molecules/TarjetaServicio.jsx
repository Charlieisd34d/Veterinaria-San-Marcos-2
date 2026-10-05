import React from 'react';
import Boton from "../atoms/Boton";

function TarjetaServicio(props) {
  return (
    <div className="card p-3 shadow-sm h-100">
      {props.icono && (
        <div className="mb-2 text-success fs-3">
          <i className={props.icono}></i>
        </div>
      )}
      <h5 className="fw-bold">{props.titulo}</h5>
      <p className="text-muted flex-grow-1">{props.descripcion}</p>
      {props.precio && (
        <p className="fw-bold text-dark mb-2">{props.precio}</p>
      )}
      <Boton 
        texto={props.textoBoton || "Solicitar servicio"} 
        onClick={props.onSolicitar} 
      />
    </div>
  );
}

export default TarjetaServicio;