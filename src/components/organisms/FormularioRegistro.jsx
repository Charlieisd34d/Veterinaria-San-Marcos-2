import { Link } from "react-router-dom";

function FormularioRegistro(props) {
  return (
    <div className="row justify-content-center py-5">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="card border-0 shadow-lg rounded-4 p-4">
          <h1 className="h3 fw-bold text-center mb-4">Crear cuenta</h1>
          <form onSubmit={props.onSubmit} className="row g-3">
            <div>
              <label htmlFor="registro-nombre" className="form-label">Nombre</label>
              <input id="registro-nombre" className="form-control" autoComplete="name"
                value={props.nombre} onChange={props.onChange} name="nombre" maxLength={100} required />
            </div>
            <div>
              <label htmlFor="registro-correo" className="form-label">Correo</label>
              <input id="registro-correo" className="form-control" type="email" autoComplete="email"
                value={props.correo} onChange={props.onChange} name="correo" maxLength={254} required />
            </div>
            <div>
              <label htmlFor="registro-password" className="form-label">Contraseña</label>
              <input id="registro-password" className="form-control" type="password" autoComplete="new-password"
                value={props.password} onChange={props.onChange} name="password" minLength={8}
                aria-describedby="registro-password-ayuda" required />
              <div id="registro-password-ayuda" className="form-text">Usa al menos 8 caracteres.</div>
            </div>
            {props.error && <div className="text-danger small" role="alert">{props.error}</div>}
            <div className="d-grid">
              <button type="submit" className="btn btn-success py-2" disabled={props.enviando}>
                {props.enviando ? "Creando cuenta…" : "Crear cuenta"}
              </button>
            </div>
          </form>
          <Link to="/iniciar-sesion" className="mt-3 text-center">Ya tengo una cuenta</Link>
        </div>
      </div>
    </div>
  );
}

export default FormularioRegistro;
