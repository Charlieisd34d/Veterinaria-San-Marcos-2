export default function SeccionNosotros({ datosNosotros }) {
  return (
    <div className="row align-items-center g-4 g-lg-5">
      <div className="col-12 col-md-6">
        <div className="overflow-hidden rounded-4 shadow-sm border">
          <img
            src={datosNosotros.imagenUrl}
            alt={datosNosotros.titulo}
            className="img-fluid w-100 object-fit-cover imagen-seccion"
          />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <span className="badge bg-success-subtle text-success border mb-2 px-3 py-1 rounded-pill fw-medium">
          Conócenos
        </span>
        <h1 className="fw-bold mb-3 display-5 text-marca fuente-serif">
          {datosNosotros.titulo}
        </h1>

        <p className="fw-medium mb-3 fs-6 text-secondary">
          {datosNosotros.subtitulo}
        </p>

        <p className="text-secondary small mb-3 leading-relaxed">
          {datosNosotros.parrafo1}
        </p>

        <p className="text-secondary small mb-4 leading-relaxed">
          {datosNosotros.parrafo2}
        </p>

        <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
          {datosNosotros.puntosClave.map((punto, idx) => (
            <li key={idx} className="d-flex align-items-center text-secondary small fw-medium">
              <span className="me-2 fw-bold text-marca">✓</span>
              {punto}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
