import {useEffect} from 'react';

export function useAutoCierre(mensaje, onCerrar, milisegundos) {
  useEffect(() => {
    if (!mensaje) {
      return;
    }
    const temporizador = setTimeout(onCerrar, milisegundos);

    return () => clearTimeout(temporizador);
  }, [mensaje, milisegundos]);
}