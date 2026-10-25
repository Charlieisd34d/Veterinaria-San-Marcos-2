function AvisoPagina({ mensaje, textoCerrar = "Cerrar", onCerrar }) {
  if (!mensaje) return null;

  const variante = mensaje.variante ?? "success";
  const texto = mensaje.texto ?? mensaje;

  return (
    <div className={`alert alert-${variante} alert-dismissible fade show mb-0 rounded-0 border-0`} role="alert">
      <div className="container d-flex align-items-center justify-content-between gap-3">
        <span>{texto}</span>
        {typeof onCerrar === "function" && (
          <button type="button" className="btn-close" aria-label={textoCerrar} onClick={onCerrar}></button>
        )}
      </div>
    </div>
  );
}

export default AvisoPagina;
