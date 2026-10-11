import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Blogs from "./pages/Blogs";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import Cita from "./pages/Cita";

<<<<<<< Updated upstream
const veterinariaSanMarcos = [ /* datos de prueba */ ];
=======
const PaginaInicio = () => {
  const datosBarraSuperior = {
    ciudadTelefono: "Rancagua +56 9 7222 3448",
    etiquetaAcceso: "Acceso privado"
  };

  const datosNavBar = {
    tituloMarca: "San Marcos",
    subtituloMarca: "CLÍNICA VETERINARIA",
    iconoMarca: "bi bi-heart-fill",
    listaEnlaces: [
      { etiqueta: "Inicio", enlace: "#", activo: true },
      { etiqueta: "Servicios", enlace: "#", activo: false },
      { etiqueta: "Productos", enlace: "#", activo: false },
      { etiqueta: "Nosotros", enlace: "#", activo: false },
      { etiqueta: "Blog", enlace: "#", activo: false },
      { etiqueta: "Contacto", enlace: "#", activo: false }
    ],
    etiquetaCarrito: "Carrito",
    enlaceCarrito: "#",
    etiquetaBotonCita: "Solicitar cita"
  };

  const datosSeccionPrincipal = {
    etiqueta: "VETERINARIA SAN MARCOS",
    titulo: "Cuidamos la salud de tu mascota.",
    descripcion: "Atención veterinaria cercana y profesional en Rancagua. Agenda consultas, revisa nuestros servicios y encuentra productos seleccionados.",
    etiquetaBotonPrimario: "Solicitar una cita",
    etiquetaBotonSecundario: "Ver servicios",
    rutaImagen: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800",
    textoAlternativoImagen: "Perro en atención veterinaria"
  };

  const datosFooter = {
    textoDerechos: "© 2026 Veterinaria San Marcos",
    telefonoContacto: "+56 9 7222 3448",
    correoContacto: "contacto@sanmarcos.cl"
  };
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Inicio veterinaria={veterinariaSanMarcos} />} />
        <Route path="/servicios" element={<Servicios veterinaria={veterinariaSanMarcos} />} />
        <Route path="/productos" element={<Productos veterinaria={veterinariaSanMarcos} />} />
        <Route path="/nosotros" element={<Nosotros veterinaria={veterinariaSanMarcos} />} />
        <Route path="/blogs" element={<Blogs veterinaria={veterinariaSanMarcos} />} />
        <Route path="/contacto" element={<Contacto veterinaria={veterinariaSanMarcos} />} />
        <Route path="/carrito" element={<Carrito veterinaria={veterinariaSanMarcos} />} />
        <Route path="/cita" element={<Cita veterinaria={veterinariaSanMarcos} />} />

        {/* Vista Privada / Autenticación */}
        <Route path="/login" element={<Login veterinaria={veterinariaSanMarcos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;