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

const veterinariaSanMarcos = [ /* datos de prueba */ ];

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