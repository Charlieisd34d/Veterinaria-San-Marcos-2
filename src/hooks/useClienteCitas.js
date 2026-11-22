import { useEffect, useState } from 'react';
import { obtenerClienteCitas } from '../utils/clienteCitas';

export function useClienteCitas() {
  const [, actualizar] = useState(0);

  useEffect(() => {
    // Las transiciones dentro de la aplicación ya vuelven a renderizar las vistas.
    const refrescar = () => actualizar((version) => version + 1);
    window.addEventListener('storage', refrescar);
    window.addEventListener('pageshow', refrescar);
    return () => {
      window.removeEventListener('storage', refrescar);
      window.removeEventListener('pageshow', refrescar);
    };
  }, []);

  return obtenerClienteCitas();
}
