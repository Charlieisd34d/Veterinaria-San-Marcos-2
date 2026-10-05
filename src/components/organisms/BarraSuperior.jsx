import React from 'react';
import ElementoBarraSuperior from '../molecules/ElementoBarraSuperior';

const BarraSuperior = ({ ciudadTelefono, horarioAcceso, etiquetaAcceso }) => {
  return (
    <div className="bg-light py-2 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <ElementoBarraSuperior 
          claseIcono="bi bi-geo-alt" 
          texto={ciudadTelefono} 
        />
        <ElementoBarraSuperior 
          claseIcono="bi bi-lock" 
          texto={etiquetaAcceso} 
        />
      </div>
    </div>
  );
};

export default BarraSuperior;