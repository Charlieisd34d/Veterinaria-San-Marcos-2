import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validarCredenciales, guardarSesion } from "../../utils/autenticacion";

function FormularioLogin({ titulo = "Acceso administrativo", textoBoton = "Iniciar sesión", onSubmit }) {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function enviar(evento) {
    evento.preventDefault();
    const usuario = validarCredenciales(correo, password);

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    guardarSesion(usuario);
    setError("");

    if (typeof onSubmit === "function") {
      onSubmit(usuario);
      return;
    }

    navigate("/admin", { replace: true });
  }

  return (
    <form onSubmit={enviar} className="row g-3">
      <div className="col-12">
        <h5 className="mb-3">{titulo}</h5>
      </div>

      <div className="col-12">
        <label className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
          placeholder="ana@veterinaria.cl"
          required
        />
      </div>

      <div className="col-12">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(evento) => setPassword(evento.target.value)}
          placeholder="••••••••"
          required
        />
      </div>

      {error && <div className="col-12 text-danger small">{error}</div>}

      <div className="col-12 d-grid mt-2">
        <button type="submit" className="btn btn-success">
          {textoBoton}
        </button>
      </div>
    </form>
  );
}

export default FormularioLogin;
