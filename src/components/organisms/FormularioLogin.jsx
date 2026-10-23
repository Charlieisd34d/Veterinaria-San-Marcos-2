import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CampoConEtiqueta from '../molecules/CampoConEtiqueta';
import Boton from '../atoms/Boton';
import ModalComun from '../molecules/ModalComun';
import { validarObligatorio, validarCorreo } from "../../utils/validaciones"; 

function FormularioLogin(props) {
  const [valores, setValores] = useState({});

  function alCambiar(id, texto) {
    setValores({ ...valores, [id]: texto });
  }

  function alEnviar(evento) {
    evento.preventDefault();
    props.onEnviar(valores);
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
              onChange={(evento) => alCambiar(campo.id, evento.target.value)}
            />
            {errores[campo.id] && (
              <div className="text-danger small mt-1">{errores[campo.id]}</div>
            )}
          </div>
        ))}

        <div className="mt-3 d-grid">
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

export default FormularioLogin;