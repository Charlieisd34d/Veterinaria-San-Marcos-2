<<<<<<< HEAD
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
=======
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
>>>>>>> origin/backup/admin-fix-24-10-2026
