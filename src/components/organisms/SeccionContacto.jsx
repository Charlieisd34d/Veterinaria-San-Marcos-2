import React, { useState } from 'react';
import TituloPrincipal from '../atoms/TituloPrincipal';
import Parrafo from '../atoms/Parrafo';
import IconoTexto from '../atoms/IconoTexto';
import CampoConEtiqueta from '../molecules/CampoConEtiqueta';
import EtiquetaCampo from '../atoms/EtiquetaCampo';
import TextoError from '../atoms/TextoError';
import Boton from '../atoms/Boton';
import AlertaCerrable from '../molecules/AlertaCerrable';
import { validarObligatorio, validarCorreo } from '../../utils/validaciones';

export default function SeccionContacto(props) {
  const [valores, setValores] = useState({});
  const [errores, setErrores] = useState({});
  const [enviadoExito, setEnviadoExito] = useState(false);

  function alCambiar(id, valor) {
    setValores(function (prev) {
      return { ...prev, [id]: valor };
    });
    setErrores(function (prev) {
      return { ...prev, [id]: '' };
    });
    setEnviadoExito(false);
  }

  function alEnviar(evento) {
    evento.preventDefault();

    const nuevosErrores = {};

    const errorNombre = validarObligatorio(valores.nombre || '');
    if (errorNombre) nuevosErrores.nombre = errorNombre;

    const valorCorreo = valores.correo || '';
    const errorCorreoObligatorio = validarObligatorio(valorCorreo);
    if (errorCorreoObligatorio) {
      nuevosErrores.correo = errorCorreoObligatorio;
    } else if (valorCorreo) {
      const errorFormatoCorreo = validarCorreo(valorCorreo);
      if (errorFormatoCorreo) nuevosErrores.correo = errorFormatoCorreo;
    }

    const errorMotivo = validarObligatorio(valores.motivo || '');
    if (errorMotivo) nuevosErrores.motivo = errorMotivo;

    const errorMensaje = validarObligatorio(valores.mensaje || '');
    if (errorMensaje) nuevosErrores.mensaje = errorMensaje;

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const datosEnviados = { ...valores };

    setErrores({});
    setEnviadoExito(true);
    setValores({});

    if (typeof props.onEnviar === 'function') {
      props.onEnviar(datosEnviados);
    }
  }

  function manejarCerrarAlerta() {
    setEnviadoExito(false);
  }

  return (
    <div className="container py-4">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5">
          <TituloPrincipal texto={props.titulo || 'Contacto'} />
          <Parrafo texto={props.subtitulo || 'Escríbenos o visítanos en Rancagua.'} />

          <div className="d-flex flex-column gap-3 mt-4">
            {Array.isArray(props.infoContacto) &&
              props.infoContacto.map(function (item, index) {
                return (
                  <div key={item.tituloSeccion || index} className="d-flex flex-column">
                    <span className="fw-bold text-dark d-flex align-items-center gap-2 mb-1">
                      <i className={item.iconoClase}></i> {item.tituloSeccion}
                    </span>
                    <span className="text-muted ms-4">{item.textoDetalle}</span>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="p-4 border rounded-3 bg-white shadow-sm">
            {enviadoExito && (
              <div className="mb-4">
                <AlertaCerrable
                  variante="success"
                  mensaje="¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto pronto."
                  onCerrar={manejarCerrarAlerta}
                />
              </div>
            )}

            <form onSubmit={alEnviar}>
              <CampoConEtiqueta
                id="nombre"
                etiqueta="Nombre"
                tipo="text"
                placeholder="Tu nombre completo"
                value={valores.nombre || ''}
                onChange={function (e) {
                  alCambiar('nombre', e.target.value);
                }}
                error={errores.nombre}
              />

              <CampoConEtiqueta
                id="correo"
                etiqueta="Correo"
                tipo="email"
                placeholder="tucorreo@ejemplo.com"
                value={valores.correo || ''}
                onChange={function (e) {
                  alCambiar('correo', e.target.value);
                }}
                error={errores.correo}
              />

              <div className="mb-3">
                <label htmlFor="motivo" className="form-label fw-bold">Motivo</label>
                <select
                  id="motivo"
                  className={`form-select ${errores.motivo ? 'is-invalid' : ''}`}
                  value={valores.motivo || ''}
                  onChange={function (e) {
                    alCambiar('motivo', e.target.value);
                  }}
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="Consulta general">Consulta general</option>
                  <option value="Información de servicios">Información de servicios</option>
                  <option value="Productos">Productos</option>
                </select>
                {errores.motivo && <TextoError texto={errores.motivo} />}
              </div>

              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label fw-bold">Mensaje</label>
                <textarea
                  id="mensaje"
                  className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  value={valores.mensaje || ''}
                  onChange={function (e) {
                    alCambiar('mensaje', e.target.value);
                  }}
                ></textarea>
                {errores.mensaje && <TextoError texto={errores.mensaje} />}
              </div>

              <div className="d-grid">
                <Boton
                  tipo="submit"
                  texto={props.textoBoton || 'Enviar mensaje'}
                  variante="success"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}