import React from 'react';

export default function AlertaCerrable({ mensaje, variante = "success", onCerrar }) {
  return (
    <div className={`alert alert-${variante} alert-dismissible fade show`} role="alert">
      {mensaje}
      <button 
        type="button" 
        className="btn-close" 
        aria-label="Close" 
        onClick={onCerrar}
      ></button>
    </div>
  );
}