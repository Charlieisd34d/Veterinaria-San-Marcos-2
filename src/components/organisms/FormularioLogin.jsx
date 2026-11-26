import { Link } from "react-router-dom";

function FormularioLogin(props) {
  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="card border-0 shadow-lg rounded-4 p-4">
          <div className="text-center mb-4">
            <h1 className="mt-3 h3 fw-bold text-marca">Iniciar sesión</h1>
          </div>

          {props.cuentaCreada && (
            <p className="alert alert-success" role="status">Cuenta creada. Ya puedes iniciar sesión.</p>
          )}
          <form onSubmit={props.onSubmit} className="row g-3">
            <div className="col-12">
              <label htmlFor="login-correo" className="form-label">Correo</label>
              <input
                id="login-correo"
                type="email"
                autoComplete="username"
                className="form-control"
                value={props.correo}
                onChange={(evento) => props.onCambiarCorreo(evento.target.value)}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="login-password" className="form-label">Contraseña</label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                className="form-control"
                value={props.password}
                onChange={(evento) => props.onCambiarPassword(evento.target.value)}
                required
              />
            </div>

            {props.error && <div className="col-12 text-danger small" role="alert">{props.error}</div>}

            <div className="col-12 d-grid mt-2">
              <button type="submit" className="btn btn-success py-2" disabled={props.enviando}>
                {props.enviando ? "Ingresando…" : "Ingresar"}
              </button>
            </div>
          </form>
          <Link to="/registro" className="mt-3 text-center">Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
}

export default FormularioLogin;
