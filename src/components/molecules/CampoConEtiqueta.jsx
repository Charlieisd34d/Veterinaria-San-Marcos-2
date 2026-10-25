function CampoConEtiqueta({ id, etiqueta, tipo = "text", placeholder = "", value = "", error = "", onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-medium">{etiqueta}</label>
      <input
        id={id}
        type={tipo}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}

export default CampoConEtiqueta;
