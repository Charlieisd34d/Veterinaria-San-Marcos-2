import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { estaAutenticado, guardarSesion } from "../utils/autenticacion";
import { loginApi, registroApi } from "../services/authService";

function PaginaInicioSesion() {
  const navigate = useNavigate();
  const [modoRegistro, setModoRegistro] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  useEffect(() => {
    if (estaAutenticado()) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  async function alEnviarFormulario(evento) {
    evento.preventDefault();
    setError("");
    setMensajeExito("");
    setCargando(true);

    try {
      if (modoRegistro) {
        await registroApi({ nombre, correo, password });
        setMensajeExito("Cuenta registrada en PostgreSQL. Ahora puedes iniciar sesión.");
        setModoRegistro(false);
        setPassword("");
      } else {
        const authDTO = await loginApi({ correo, password });
        guardarSesion(authDTO.usuario, authDTO.token);
        navigate("/admin", { replace: true });
      }
    } catch (err) {
      const mensajeApi =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        (err?.code === "ERR_NETWORK"
          ? "No se pudo conectar con el servidor backend (verifica que Spring Boot esté corriendo en el puerto 8080)."
          : "Correo o contraseña incorrectos.");
      setError(mensajeApi);
    } finally {
      setCargando(false);
    }
  }

  return (
    <PlantillaPublica>
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 p-4">
            <div className="text-center mb-4">
              <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2">
                {modoRegistro ? "Crear cuenta" : "Acceso al sistema"}
              </span>
              <h1 className="mt-3 h3 fw-bold" style={{ color: "#123C35" }}>
                {modoRegistro ? "Registrarse" : "Iniciar sesión"}
              </h1>
            </div>

            <form onSubmit={alEnviarFormulario} className="row g-3">
              {modoRegistro && (
                <div className="col-12">
                  <label className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Carlos Muñoz"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    required
                  />
                </div>
              )}

              <div className="col-12">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="correo@ejemplo.cl"
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
                  placeholder={modoRegistro ? "Mínimo 6 caracteres" : "••••••••"}
                  value={password}
                  onChange={(evento) => setPassword(evento.target.value)}
                  minLength={modoRegistro ? 6 : undefined}
                  required
                />
              </div>

              {error && <div className="col-12 text-danger small">{error}</div>}
              {mensajeExito && <div className="col-12 text-success small fw-medium">{mensajeExito}</div>}

              <div className="col-12 d-grid mt-2">
                <button type="submit" className="btn btn-success py-2" disabled={cargando}>
                  {cargando
                    ? "Conectando..."
                    : modoRegistro
                    ? "Registrar cuenta"
                    : "Ingresar"}
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link btn-sm text-decoration-none"
                style={{ color: "#123C35" }}
                onClick={() => {
                  setModoRegistro((prev) => !prev);
                  setError("");
                  setMensajeExito("");
                }}
              >
                {modoRegistro
                  ? "¿Ya tienes cuenta? Inicia sesión aquí"
                  : "¿No tienes cuenta? Regístrate aquí"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default PaginaInicioSesion;
