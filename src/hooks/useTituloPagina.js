<<<<<<< HEAD
import {useEffect} from 'react';

export function useTituloPagina(titulo){
    useEffect(() =>{
        document.title = `${titulo} | Veterinaria San Marco`;
    }, [titulo]);
}
=======
import { useEffect } from "react";

export function useTituloPagina(titulo) {
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = titulo;

    return () => {
      document.title = tituloAnterior;
    };
  }, [titulo]);
}
>>>>>>> origin/backup/admin-fix-24-10-2026
