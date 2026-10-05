import React from 'react';

const EnlaceNavegacion = ({ enlace = "#", etiqueta, activo = false, claseIcono }) => {
  return (
    <a 
      href={enlace} 
      className={`nav-link px-3 py-2 rounded-pill fw-medium d-inline-flex align-items-center gap-1 ${activo ? 'bg-success bg-opacity-10 text-success active' : 'text-secondary'}`}
    >
      {claseIcono && <i className={claseIcono}></i>}
      {etiqueta}
    </a>
  );
};

export default EnlaceNavegacion;