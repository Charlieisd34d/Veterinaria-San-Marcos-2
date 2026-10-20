import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CampoConEtiqueta from '../molecules/CampoConEtiqueta';
import Boton from '../atoms/Boton';
import { validarObligatorio, validarCorreo } from '../utils/validaciones';

export default function FormularioRegistro(props) {
  const [valores, setValores] = useState({});
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  function alCambiar(id, texto) {
    setValores({ ...valores, [id]: texto });
    setErrores({ ...errores, [id]: '' });
  }

  function alEnviar(evento) {
    evento.preventDefault();

    const nuevosErrores = {};
    props.campos.forEach((campo) => {
      const valorCampo = valores[campo.id] || "";
      let error = validarObligatorio(valorCampo);
      
      if (!error && campo.tipo === 'email') {
        error = validarCorreo(valorCampo);
      }
      
      if (error) {
        nuevosErrores[campo.id] = error;
      }
    });

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    if (props.onEnviar) {
      props.onEnviar(valores);
    }
  }

  return (
    <form className="card p-4 border-0 shadow-sm" onSubmit={alEnviar}>
      <h2 className="h4 mb-3 fw-bold text-center" style={{ color: '#0f4c42' }}>
        {props.titulo}
      </h2>

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

      <div className="mt-3 d-grid">
        <Boton 
          tipo="submit" 
          texto={props.textoBoton} 
          variante={props.varianteBoton} 
        />
      </div>

      <div className="text-center mt-3">
        <span className="text-muted small">¿Ya tienes una cuenta? </span>
        <a 
          href="/login" 
          className="small text-decoration-none fw-bold text-success"
          onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}
        >
          Ingresa aquí
        </a>
      </div>
    </form>
  );
}