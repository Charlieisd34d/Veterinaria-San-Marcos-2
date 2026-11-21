function BarraLateralAdmin({ tituloMarca = "San Marcos", subtituloMarca = "Admin", iconoMarca = "bi bi-heart-fill", enlaces = [], volver, onNavegar, onCerrarSesion }) {
  return (
    <aside className="bg-dark text-white d-flex flex-column p-3" style={{ width: 280 }}>
      <div className="d-flex align-items-center gap-3 mb-4 px-2 pt-2">
        <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
          <i className={iconoMarca}></i>
        </div>
        <div>
          <div className="fw-bold">{tituloMarca}</div>
          <small className="text-white-50">{subtituloMarca}</small>
        </div>
      </div>

      <nav className="nav flex-column gap-2">
        {enlaces.map((enlace) => (
          <button
            key={enlace.id ?? enlace.enlace}
            type="button"
            className={`btn text-start ${enlace.activo ? "btn-light text-dark" : "btn-outline-light border-0 text-white-50"}`}
            onClick={() => onNavegar?.(enlace.enlace)}
          >
            <i className={`${enlace.claseIcono ?? "bi bi-circle"} me-2`}></i>
            {enlace.etiqueta}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-top border-secondary">
        {volver && (
          <button type="button" className="btn btn-outline-light w-100 mb-2" onClick={() => onNavegar?.(volver.enlace)}>
            <i className={`${volver.claseIcono ?? "bi bi-box-arrow-left"} me-2`}></i>
            {volver.etiqueta}
          </button>
        )}

        {onCerrarSesion && (
          <button type="button" className="btn btn-danger w-100" onClick={onCerrarSesion}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar sesión
          </button>
        )}
      </div>
    </aside>
  );
}

export default BarraLateralAdmin;
