import React from 'react';

const Logotipo = ({ titulo, subtitulo, claseIcono }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="rounded-circle bg-success text-white p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
        <i className={claseIcono}></i>
      </div>
      <div>
        <h1 className="h5 mb-0 fw-bold text-dark lh-1">{titulo}</h1>
        <small className="text-muted fw-semibold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
          {subtitulo}
        </small>
      </div>
    </div>
  );
};

export default Logotipo;