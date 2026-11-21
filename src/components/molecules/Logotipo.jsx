function Logotipo({ titulo = "San Marcos", subtitulo = "Clínica Veterinaria", claseIcono = "bi bi-heart-fill" }) {
  return (
    <div className="d-flex align-items-center gap-2 text-decoration-none">
      <div className="d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style={{ width: 36, height: 36 }}>
        <i className={claseIcono}></i>
      </div>
      <div>
        <div className="fw-bold text-dark lh-1">{titulo}</div>
        <small className="text-secondary d-block">{subtitulo}</small>
      </div>
    </div>
  );
}

export default Logotipo;
