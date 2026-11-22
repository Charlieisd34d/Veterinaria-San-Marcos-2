import { useState } from 'react';
import ModalComun from '../molecules/ModalComun';
import CampoConEtiqueta from '../molecules/CampoConEtiqueta';
import TextoError from '../atoms/TextoError';
import Boton from '../atoms/Boton';
import { validarObligatorio, validarCorreo } from '../../utils/validaciones';

function obtenerFechaHoyISO() {
  const hoy = new Date();
  const anio = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const dia = String(hoy.getDate()).padStart(2, '0');
  return `${anio}-${mes}-${dia}`;
}

export default function FormularioCita(props) {
  const [valores, setValores] = useState(() => ({ correo: props.correoInicial ?? '' }));
  const [errores, setErrores] = useState({});
  const [errorEnvio, setErrorEnvio] = useState('');

  function alCambiar(id, texto) {
    setValores(function (prev) {
      return { ...prev, [id]: texto };
    });
    setErrores(function (prev) {
      return { ...prev, [id]: '' };
    });
  }

  function manejarCierreModal() {
    setErrores({});
    if (typeof props.onHide === 'function') {
      props.onHide();
    }
  }

  function alEnviar(evento) {
    evento.preventDefault();

    const listaCampos = Array.isArray(props.campos) ? props.campos : [];
    const nuevosErrores = {};
    const hoyISO = obtenerFechaHoyISO();

    listaCampos.forEach(function (campo) {
      const valorCampo = valores[campo.id] || '';
      let error = validarObligatorio(valorCampo);

      if (!error && campo.tipo === 'email') {
        error = validarCorreo(valorCampo);
      }

      if (!error && campo.tipo === 'date' && valorCampo < hoyISO) {
        error = 'Selecciona una fecha igual o posterior a hoy.';
      }

      if (error) {
        nuevosErrores[campo.id] = error;
      }
    });

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    setErrorEnvio('');
    try {
      props.onEnviar({ ...valores, correo: valores.correo.trim() });
    } catch {
      setErrorEnvio('No se pudo guardar la cita. Comprueba tu sesión y el almacenamiento del navegador e inténtalo de nuevo.');
    }
  }

  return (
    <ModalComun
      show={props.show}
      onHide={manejarCierreModal}
      titulo={props.titulo}
    >
      <form onSubmit={alEnviar}>
        {errorEnvio && <div className="alert alert-danger" role="alert">{errorEnvio}</div>}
        {Array.isArray(props.campos) &&
          props.campos.map(function (campo) {
            return (
              <div key={campo.id} className="mb-3">
                <CampoConEtiqueta
                  id={campo.id}
                  etiqueta={campo.etiqueta}
                  tipo={campo.tipo}
                  placeholder={campo.placeholder}
                  value={valores[campo.id] || ''}
                  onChange={function (e) {
                    alCambiar(campo.id, e.target.value);
                  }}
                />
                {errores[campo.id] && <TextoError texto={errores[campo.id]} />}
              </div>
            );
          })}

        <div className="mt-4 text-center">
          <Boton
            tipo="submit"
            texto={props.textoBoton || 'Agendar Cita'}
            variante={props.varianteBoton || 'success'}
          />
        </div>
      </form>
    </ModalComun>
  );
}
