import PlantillaPublica from "../components/templates/PlantillaPublica";

const serviciosData = [
  {
    id: 1,
    titulo: "Consulta general",
    descripcion: "Evaluación integral, diagnóstico y seguimiento para cuidar la salud de tu mascota.",
    claseIcono: "bi bi-heart",
  },
  {
    id: 2,
    titulo: "Vacunación",
    descripcion: "Calendario personalizado para mantener todas las vacunas al día con seguridad.",
    claseIcono: "bi bi-syringe",
  },
  {
    id: 3,
    titulo: "Cirugía menor",
    descripcion: "Procedimientos seguros con cuidado profesional y acompañamiento cercano.",
    claseIcono: "bi bi-shield-check",
  },
  {
    id: 4,
    titulo: "Bienestar preventivo",
    descripcion: "Desparasitación, control de peso y hábitos para una vida larga y saludable.",
    claseIcono: "bi bi-activity",
  },
];

function PaginaServicios() {
  return (
    <PlantillaPublica>
      <div className="mb-5 text-center">
        <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2 mb-3">
          Servicios veterinarios
        </span>
        <h1 className="display-5 fw-bold" style={{ color: "#123C35" }}>
          Atención integral para tu mascota
        </h1>
      </div>

      <div className="row g-4">
        {serviciosData.map((servicio) => (
          <div key={servicio.id} className="col-12 col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
              <div className="mb-3 fs-2 text-success">
                <i className={servicio.claseIcono}></i>
              </div>
              <h3 className="h5 fw-bold" style={{ color: "#123C35" }}>{servicio.titulo}</h3>
              <p className="text-secondary mb-0">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </PlantillaPublica>
  );
}

export default PaginaServicios;