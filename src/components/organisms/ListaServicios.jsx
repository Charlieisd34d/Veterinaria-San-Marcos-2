import React from 'react';
import TarjetaServicio from '../molecules/TarjetaServicio';

const ListaServicios = ({ servicios, alHacerClicAgendar }) => {
  return (
    <div className="my-4">
      {/* Encabezado de la sección */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark display-5" style={{ color: '#0d3b33' }}>
          Servicios veterinarios
        </h1>
        <p className="text-muted lead">
          Atenciones esenciales para prevenir, diagnosticar y tratar problemas de salud.
        </p>
      </div>

      {/* Cuadrícula (Grid) responsiva con 2 columnas (como en tu imagen) */}
      <div className="row g-4">
        {servicios.map((servicio) => (
          <div className="col-md-6" key={servicio.id || servicio.codigo}>
            <TarjetaServicio 
              titulo={servicio.nombre} 
              descripcion={servicio.observaciones || servicio.descripcion} 
              claseIcono={servicio.icono} 
            />
          </div>
        ))}
      </div>

      {/* Botón inferior "Agendar atención" */}
      <div className="mt-5">
        <button 
          className="btn btn-lg px-4 text-white" 
          style={{ backgroundColor: '#0d5c4d', borderColor: '#0d5c4d' }}
          onClick={alHacerClicAgendar}
        >
          Agendar atención
        </button>
      </div>
    </div>
  );
};

export default ListaServicios;