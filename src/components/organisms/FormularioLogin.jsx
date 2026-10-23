import React, { useState } from 'react';
import ModalComun from '../molecules/ModalComun';
import CampoConEtiqueta from '../molecules/CampoConEtiqueta';
import Boton from '../atoms/Boton';
import { validarObligatorio, validarCorreo } from '../../utils/validaciones'; // 1. Importa tus validaciones

export default function FormularioLogin(props) {
  const [valores, setValores] = useState({});
  const [errores, setErrores] = useState({}); 

  function alCambiar(id, texto) {
    setValores({ ...valores, [id]: texto });
    setErrores({ ...errores, [id]: '' });
  }

  function alEnviar(evento) {
    evento.preventDefault();

    const nuevosErrores = {};
    
    // 2. Recorre y valida cada campo utilizando las funciones importadas
    props.campos?.forEach((campo) => {
      const valorCampo = valores[campo.id] || "";
      let error = validarObligatorio(valorCampo);
      
      if (!error && campo.tipo === 'email') {
        error = validarCorreo(valorCampo);
      }
      
      if (error) {
        nuevosErrores[campo.id] = error;
      }
    });

    // 3. Si hay errores, se guardan y se detiene el envío
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    // 4. Si todo está correcto, avisa al componente superior
    if (props.onEnviar) {
      props.onEnviar(valores);
    }
  }

  return (
    <ModalComun show={props.show} onHide={props.onHide} titulo={props.titulo}>
      <form onSubmit={alEnviar}>
        {props.campos && props.campos.map((campo) => (
          <div key={campo.id} className="mb-3">
            <CampoConEtiqueta
              id={campo.id}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              placeholder={campo.placeholder}
              value={valores[campo.id] || ""}
              onChange={(e) => alCambiar(campo.id, e.target.value)}
            />
            {errores[campo.id] && (
              <div className="text-danger small mt-1">{errores[campo.id]}</div>
            )}
          </div>
        ))}

        <div className="mt-4 text-center">
          <Boton 
            tipo="submit" 
            texto={props.textoBoton} 
            variante={props.varianteBoton} 
          />
        </div>
      </form>
    </ModalComun>
  );
}