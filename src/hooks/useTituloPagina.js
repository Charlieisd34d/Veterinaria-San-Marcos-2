import {useEffect} from 'react';

export function useTituloPagina(titulo){
    useEffect(() =>{
        document.title = `${titulo} | Veterinaria San Marco`;
    }, [titulo]);
<<<<<<< HEAD

=======
>>>>>>> origin/main
}