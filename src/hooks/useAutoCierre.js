import { useEffect } from "react";

export function useAutoCierre(mensaje, onCerrar, demora = 5000) {
  useEffect(() => {
    if (!mensaje) {
      return undefined;
    }

    const temporizador = setTimeout(() => {
      onCerrar();
    }, demora);

    return () => clearTimeout(temporizador);
  }, [mensaje, onCerrar, demora]);
}
