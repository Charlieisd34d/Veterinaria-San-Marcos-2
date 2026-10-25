import { Link, useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import { useCarrito } from "../context/CarritoContext";

function PaginaInicio() {
  const { totalProductos } = useCarrito();
  const navigate = useNavigate();

  return (
    <PlantillaPublica
      barraSuperior={[{ id: 1, claseIcono: "bi bi-geo-alt", texto: "Rancagua · +56 72 223 4488" }]}
      navegacion={{
        tituloMarca: "San Marcos",
        subtituloMarca: "CLÍNICA VETERINARIA",
        iconoMarca: "bi bi-heart-fill",
        enlaces: [
          { id: 1, etiqueta: "Inicio", enlace: "/", claseIcono: "bi bi-house", activo: true },
          { id: 2, etiqueta: "Servicios", enlace: "/servicios", claseIcono: "bi bi-clipboard-heart", activo: false },
          { id: 3, etiqueta: "Productos", enlace: "/productos", claseIcono: "bi bi-shop", activo: false },
          { id: 4, etiqueta: "Nosotros", enlace: "/nosotros", claseIcono: "bi bi-info-circle", activo: false },
          { id: 5, etiqueta: "Contacto", enlace: "/contacto", claseIcono: "bi bi-envelope", activo: false },
        ],
        carrito: {
          etiqueta: `Carrito (${totalProductos})`,
          enlace: "/carrito",
          activo: false,
          claseIcono: "bi bi-cart3",
        },
        botonCita: { texto: "Solicitar cita", variante: "success" },
      }}
      onClickCita={() => navigate("/iniciar-sesion")}
    >
      <section className="row align-items-center g-5 py-4">
        <div className="col-lg-6">
          <span className="badge rounded-pill bg-success-subtle text-success border px-3 py-2 mb-3">
            VETERINARIA SAN MARCOS
          </span>
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#123C35" }}>
            Cuidamos la salud de tu mascota.
          </h1>
          <p className="lead text-secondary mb-4">
            Atención veterinaria cercana y profesional para perros, gatos y pequeñas especies.
          </p>
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/iniciar-sesion" className="btn btn-success px-4 py-3">
              Solicitar una cita
            </Link>
            <Link to="/servicios" className="btn btn-outline-success px-4 py-3">
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800"
            alt="Perro en atención veterinaria"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: "520px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </section>
    </PlantillaPublica>
  );
}

export default PaginaInicio;