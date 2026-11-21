import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { estaAutenticado, guardarSesion, validarCredenciales } from "../utils/autenticacion";

function PaginaInicioSesion() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("ana@veterinaria.cl");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  useEffect(() => {
    if (estaAutenticado()) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  function alIniciarSesion(evento) {
    evento.preventDefault();
    const usuario = validarCredenciales(correo, password);

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    guardarSesion(usuario);
    navigate("/admin", { replace: true });
  }

  return (
    <PlantillaPublica>
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 p-4">
            <div className="text-center mb-4">
              <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2">Acceso administrativo</span>
              <h1 className="mt-3 h3 fw-bold" style={{ color: "#123C35" }}>Iniciar sesión</h1>
            </div>

            <form onSubmit={alIniciarSesion} className="row g-3">
              <div className="col-12">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  value={correo}
                  onChange={(evento) => setCorreo(evento.target.value)}
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
                  required
                />
              </div>

              {error && <div className="col-12 text-danger small">{error}</div>}

              <div className="col-12 d-grid mt-2">
                <button type="submit" className="btn btn-success py-2">
                  Ingresar
                </button>
              </div>
            </form>

            <div className="mt-4 small text-secondary">
              Usuarios de prueba: <br />
              ana@veterinaria.cl / admin123 <br />
              luis@veterinaria.cl / admin456
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default PaginaInicioSesion;