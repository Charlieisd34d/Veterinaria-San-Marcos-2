import PlantillaPublica from '../components/templates/PlantillaPublica';

export function PaginaNosotros(props) {
  const datosNosotros = {
    titulo: "Sobre nosotros",
    subtitulo: "Veterinaria San Marcos atiende a las familias de Rancagua desde 2009.",
    parrafo1: "Somos un equipo formado por médicos y técnicos veterinarios comprometidos con una atención clara, responsable y cercana.",
    parrafo2: "Nuestro objetivo es facilitar el cuidado de cada mascota mediante citas en línea, fichas clínicas digitales y recordatorios de vacunación.",
    puntosClave: [
      "15 años de experiencia en la región",
      "Equipo veterinario certificado",
      "Fichas clínicas digitales y protegidas"
    ],
    imagenUrl: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&auto=format&fit=crop&q=80"
  };

  return (
    <PlantillaPublica
      mensaje={props.mensaje}
      onCerrarMensaje={props.onCerrarMensaje}
      onClickCita={props.onClickCita}
    >
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-12 col-md-6">
          <div className="overflow-hidden rounded-4 shadow-sm border">
            <img
              src={datosNosotros.imagenUrl}
              alt={datosNosotros.titulo}
              className="img-fluid w-100 object-fit-cover"
              style={{ maxHeight: '420px', minHeight: '320px' }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <span className="badge bg-success-subtle text-success border mb-2 px-3 py-1 rounded-pill fw-medium">
            Conócenos
          </span>
          <h1 className="fw-bold mb-3 display-5" style={{ color: '#123C35', fontFamily: 'serif' }}>
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
                <span className="me-2 fw-bold" style={{ color: '#123C35' }}>✓</span>
                {punto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default PaginaNosotros;