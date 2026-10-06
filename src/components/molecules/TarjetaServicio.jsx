import React from 'react';
import Parrafo from '../atoms/Parrafo';

const TarjetaServicio = ({ titulo, descripcion, claseIcono }) => {
  return (
    <div className="card h-100 border rounded-3 p-3 shadow-sm flex-row align-items-start gap-3">
      {/* Contenedor del ícono verde suave */}
      <div 
        className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-3 p-2" 
        style={{ width: '48px', height: '48px', backgroundColor: '#e6f4f1', color: '#0d5c4d' }}
      >
        <i className={`${claseIcono} fs-5`}></i>
      </div>
      <div>
        <h5 className="fw-bold fs-6 mb-1 text-dark">
          {titulo}
        </h5>
        <Parrafo 
          texto={descripcion} 
          clasePersonalizada="text-secondary small mb-0" 
        />
      </div>
    </div>
  );
};

export default TarjetaServicio;