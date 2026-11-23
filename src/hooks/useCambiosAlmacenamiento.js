import { useEffect, useState } from 'react';
import { EVENTO_CAMBIO_CITAS } from '../services/citasService';

export function useCambiosAlmacenamiento() {
  const [, actualizar] = useState(0);

  useEffect(() => {
    // Las transiciones dentro de la aplicación ya vuelven a renderizar las vistas.
    const refrescar = () => actualizar((version) => version + 1);
    window.addEventListener('storage', refrescar);
    window.addEventListener('pageshow', refrescar);
    window.addEventListener(EVENTO_CAMBIO_CITAS, refrescar);
    return () => {
      window.removeEventListener('storage', refrescar);
      window.removeEventListener('pageshow', refrescar);
      window.removeEventListener(EVENTO_CAMBIO_CITAS, refrescar);
    };
  }, []);
}
