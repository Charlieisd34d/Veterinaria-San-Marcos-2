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
export default FormularioLogin;