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
    setValores({ ...valores, [id]: valor });
    setErrores({ ...errores, [id]: '' });
    setEnviadoExito(false);
  }

  function alEnviar(evento) {
    evento.preventDefault();
    
    const nuevosErrores = {};

    const errorNombre = validarObligatorio(valores.nombre || "");
    if (errorNombre) nuevosErrores.nombre = errorNombre;

    const valorCorreo = valores.correo || "";
    const errorCorreoObligatorio = validarObligatorio(valorCorreo);
    if (errorCorreoObligatorio) {
      nuevosErrores.correo = errorCorreoObligatorio;
    } else if (valorCorreo) {
      const errorFormatoCorreo = validarCorreo(valorCorreo);
      if (errorFormatoCorreo) nuevosErrores.correo = errorFormatoCorreo;
    }

    const errorMotivo = validarObligatorio(valores.motivo || "");
    if (errorMotivo) nuevosErrores.motivo = errorMotivo;

    const errorMensaje = validarObligatorio(valores.mensaje || "");
    if (errorMensaje) nuevosErrores.mensaje = errorMensaje;

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    setEnviadoExito(true);
    setValores({});

    if (props.onEnviar) {
      props.onEnviar(valores);
    }
  }

  return (
    <div className="row g-5 align-items-start">
      {/* Columna Izquierda: Información de contacto */}
      <div className="col-lg-5">
        <TituloPrincipal texto={props.titulo || "Contacto"} />
        <Parrafo texto={props.subtitulo || "Escríbenos o visítanos en Rancagua."} />

        <div className="d-flex flex-column gap-3 mt-4">
          {props.infoContacto && props.infoContacto.map((item, index) => (
            <div key={index} className="d-flex flex-column">
              <span className="fw-bold text-dark d-flex align-items-center gap-2 mb-1">
                <i className={item.iconoClase}></i> {item.tituloSeccion}
              </span>
              <span className="text-muted ms-4">{item.textoDetalle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Columna Derecha: Formulario de contacto */}
      <div className="col-lg-7">
        <div className="p-4 border rounded-3 bg-white shadow-sm">
          {enviadoExito && (
            <div className="mb-4">
              <AlertaCerrable 
                variante="success" 
                texto="¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto pronto." 
                onCerrar={() => setEnviadoExito(false)}
              />
            </div>
          )}

          <form onSubmit={alEnviar}>
            <CampoConEtiqueta
              id="nombre"
              etiqueta="Nombre"
              tipo="text"
              placeholder="Tu nombre completo"
              value={valores.nombre || ""}
              onChange={(e) => alCambiar("nombre", e.target.value)}
              error={errores.nombre}
            />

            <CampoConEtiqueta
              id="correo"
              etiqueta="Correo"
              tipo="email"
              placeholder="tucorreo@ejemplo.com"
              value={valores.correo || ""}
              onChange={(e) => alCambiar("correo", e.target.value)}
              error={errores.correo}
            />

            {/* Selector de Motivo */}
            <div className="mb-3">
              <EtiquetaCampo para="motivo" texto="Motivo" />
              <select
                id="motivo"
                className={`form-select ${errores.motivo ? 'is-invalid' : ''}`}
                value={valores.motivo || ""}
                onChange={(e) => alCambiar("motivo", e.target.value)}
              >
                <option value="">Selecciona un motivo</option>
                <option value="Consulta general">Consulta general</option>
                <option value="Información de servicios">Información de servicios</option>
                <option value="Productos">Productos</option>
              </select>
              {errores.motivo && <TextoError texto={errores.motivo} />}
            </div>

            {/* Textarea para el mensaje */}
            <div className="mb-4">
              <EtiquetaCampo para="mensaje" texto="Mensaje" />
              <textarea
                id="mensaje"
                className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                value={valores.mensaje || ""}
                onChange={(e) => alCambiar("mensaje", e.target.value)}
              ></textarea>
              {errores.mensaje && <TextoError texto={errores.mensaje} />}
            </div>

            <div className="d-grid">
              <Boton
                tipo="submit"
                texto={props.textoBoton || "Enviar mensaje"}
                variante="success"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}