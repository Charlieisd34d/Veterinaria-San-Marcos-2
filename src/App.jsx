import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosContext";
import { ClientesProvider } from "./context/ClientesContext";
import { UsuariosProvider } from "./context/UsuariosContext";
import { SolicitudesProvider } from "./context/SolicitudesContext";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaAdminResumen from "./pages/PaginaAdminResumen";
import PaginaAdminProductos from "./pages/PaginaAdminProductos";
import PaginaAdminClientes from "./pages/PaginaAdminClientes";
import PaginaAdminUsuarios from "./pages/PaginaAdminUsuarios";
import PaginaAdminSolicitudes from "./pages/PaginaAdminSolicitudes";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

function App() {
  return (
    <ProductosProvider>
      <ClientesProvider>
        <SolicitudesProvider>
          <UsuariosProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PaginaInicio />} />
                <Route path="/servicios" element={<PaginaServicios />} />
                <Route path="/admin" element={<PaginaAdminResumen />} />
                <Route path="/admin/productos" element={<PaginaAdminProductos />} />
                <Route path="/admin/clientes" element={<PaginaAdminClientes />} />
                <Route path="/admin/usuarios" element={<PaginaAdminUsuarios />} />
                <Route path="/admin/solicitudes" element={<PaginaAdminSolicitudes />} />
                <Route path="*" element={<PaginaNoEncontrada />} />
              </Routes>
            </BrowserRouter>
          </UsuariosProvider>
        </SolicitudesProvider>
      </ClientesProvider>
    </ProductosProvider>
  );
}

export default App;