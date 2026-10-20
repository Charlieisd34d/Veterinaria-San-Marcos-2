import { useState } from "react";
import CampoConEtiqueta from "../molecules/CampoConEtiqueta";
import Boton from "../atoms/Boton";

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
    <form className="card p-4" onSubmit={alEnviar}>
      <h2 className="h4 mb-3">{props.titulo}</h2>
      {props.campos.map((campo) => (
        <CampoConEtiqueta
          key={campo.id}
          id={campo.id}
          etiqueta={campo.etiqueta}
          tipo={campo.tipo}
          placeholder={campo.placeholder}
          value={valores[campo.id] || ""}
          onChange={(evento) => alCambiar(campo.id, evento.target.value)}
        />
      ))}
      <Boton tipo="submit" texto={props.textoBoton} variante={props.varianteBoton} />
    </form>
  );
}

export default FormularioLogin;