// src/components/organisms/FormularioAdmin.jsx
import { useState } from "react";
import Boton from "../atoms/Boton";
import CampoConEtiqueta from "../molecules/CampoConEtiqueta";
import { validarObligatorio, validarCorreo, validarNumero } from "../../utils/validaciones";

function crearValoresIniciales(campos, item) {
  const datos = item || {};
  const valores = {};
  campos.forEach((campo) => {
    valores[campo.id] = datos[campo.id] === undefined ? "" : String(datos[campo.id]);
  });
  return valores;
}

function validarCampo(campo, valor) {
  const errorObligatorio = validarObligatorio(valor);
  if (errorObligatorio) {
    return errorObligatorio;
  }
  if (campo.tipo === "email") {
    return validarCorreo(valor);
  }
  if (campo.tipo === "number") {
    return validarNumero(valor, 0);
  }
  return "";
}

function FormularioAdmin(props) {
  const [valores, setValores] = useState(() =>
    crearValoresIniciales(props.campos, props.valoresIniciales)
  );
  const [errores, setErrores] = useState({});

  function alCambiar(id, texto) {
    setValores({ ...valores, [id]: texto });
  }

  function alEnviar(evento) {
    evento.preventDefault();

    const nuevosErrores = {};
    props.campos.forEach((campo) => {
      nuevosErrores[campo.id] = validarCampo(campo, valores[campo.id]);
    });
    setErrores(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some((mensaje) => mensaje !== "");
    if (hayErrores) {
      return;
    }

    const datos = {};
    props.campos.forEach((campo) => {
      datos[campo.id] = campo.tipo === "number" ? Number(valores[campo.id]) : valores[campo.id].trim();
    });
    props.onGuardar(datos);
  }

  return (
    <form onSubmit={alEnviar} noValidate>
      {props.campos.map((campo) => (
        <CampoConEtiqueta
          key={campo.id}
          id={campo.id}
          etiqueta={campo.etiqueta}
          tipo={campo.tipo}
          placeholder={campo.placeholder}
          value={valores[campo.id]}
          error={errores[campo.id]}
          onChange={(evento) => alCambiar(campo.id, evento.target.value)}
        />
      ))}

      <div className="d-flex justify-content-end gap-2">
        <Boton texto={props.textoCancelar} variante="outline-secondary" onClick={props.onCancelar} />
        <Boton tipo="submit" texto={props.textoGuardar} variante="success" />
      </div>
    </form>
  );
}

export default FormularioAdmin;