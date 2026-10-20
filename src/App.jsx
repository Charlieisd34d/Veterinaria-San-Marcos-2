import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosContext";
import { ClientesProvider } from "./context/ClientesContext";
import { UsuariosProvider } from "./context/UsuariosContext";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaAdminResumen from "./pages/PaginaAdminResumen"
import PaginaAdminProductos from "./pages/PaginaAdminProductos"
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

function App() {
  return (
    <ProductosProvider>
      <ClientesProvider>
        <UsuariosProvider>  
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PaginaInicio />} />
              <Route path="/servicios" element={<PaginaServicios />} />
              <Route path="/admin" element={<PaginaAdminResumen />} />
               <Route path="/admin/productos" element={<PaginaAdminProductos />} />
              <Route path="*" element={<PaginaNoEncontrada />} />
            </Routes>
          </BrowserRouter>
        </UsuariosProvider>
      </ClientesProvider>
    </ProductosProvider>
  );
}

export default App;