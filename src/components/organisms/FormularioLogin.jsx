<<<<<<< HEAD
import React, { useState } from 'react';
import { validarEmail, validarClave } from '../../utils/validaciones';

const FormularioLogin = ({ alEnviarExitoso }) => {
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [errores, setErrores] = useState({
    email: '',
    clave: ''
});

const manejarEnvio = (evento) => {
    evento.preventDefault(); // Evita que la página se recargue
    // Ejecuta las validaciones
    const errorEmail = validarEmail(email);
    const errorClave = validarClave(clave);
    setErrores({
    email: errorEmail,
    clave: errorClave
});

// Si no hay errores, se comunica el éxito a la página
    if (!errorEmail && !errorClave) {
    alEnviarExitoso({ email, clave });
    }
};
return (
    <form onSubmit={manejarEnvio} className="w-100" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input type="email" className={`form-control ${errores.email ? 'is-invalid' : ''}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ejemplo@sanmarcos.cl"
    />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
        </div>
        <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input type="password" className={`form-control ${errores.clave ? 'is-invalid' : ''}`}
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        placeholder="********"
    />
        {errores.clave && <div className="invalid-feedback">{errores.clave}</div>}
    </div>
        <button type="submit" className="btn text-white w-100" style={{ backgroundColor: '#0d5c4d' }}>
        Ingresar
        </button>
        </form>
    );
};
=======
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

>>>>>>> origin/main
export default FormularioLogin;