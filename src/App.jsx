import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriasProvider } from "./context/CategoriasContext";
import { ClientesProvider } from "./context/ClientesContext";
import { UsuariosProvider } from "./context/UsuariosContext";
import { SolicitudesProvider } from "./context/SolicitudesContext";
import { ProductosProvider } from "./context/ProductosContext";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaAdminResumen from "./pages/PaginaAdminResumen";
import PaginaAdminSolicitudes from "./pages/PaginaAdminSolicitudes"
import PaginaAdminCategorias from "./pages/PaginaAdminCategorias";
import PaginaAdminProductos from "./pages/PaginaAdminProductos";
import PaginaAdminClientes from "./pages/PaginaAdminClientes";
import PaginaAdminHistorial from "./pages/PaginaAdminHistorial";
import PaginaAdminReporte from "./pages/PaginaAdminReporte";
import PaginaAdminCriticos from "./pages/PaginaAdminCriticos";
import PaginaAdminUsuarios from "./pages/PaginaAdminUsuarios";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import PaginaProductos from "./pages/PaginaProductos";
import PaginaNosotros from "./pages/PaginaNosotros";
import PaginaCarrito from "./pages/PaginaCarrito";





function App() {
  return (
    <ProductosProvider>
      <CategoriasProvider>
          <ClientesProvider>
            <SolicitudesProvider>
              <UsuariosProvider>  
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<PaginaInicio />} />
                    <Route path="/servicios" element={<PaginaServicios />} />
                    <Route path="/admin" element={<PaginaAdminResumen />} />
                    <Route path="/admin/solicitudes" element={<PaginaAdminSolicitudes />} />
                    <Route path="/admin/productos" element={<PaginaAdminProductos />} />
                    <Route path="/nosotros" element={<PaginaNosotros />} />
                    <Route path="/carrito" element={<PaginaCarrito />} />
                    <Route path="/productos" element={<PaginaProductos />} />
                    <Route path="/admin/categorias" element={<PaginaAdminCategorias />} />
                    <Route path="/admin/clientes" element={<PaginaAdminClientes />} />
                    <Route path="/admin/usuarios" element={<PaginaAdminUsuarios />} />
                    <Route path="/admin/historial" element={<PaginaAdminHistorial />} />
                    <Route path="/admin/reporte" element={<PaginaAdminReporte />} />
                    <Route path="/admin/criticos" element={<PaginaAdminCriticos />} />
                    <Route path="*" element={<PaginaNoEncontrada />} />
                  </Routes>
                </BrowserRouter>
              </UsuariosProvider>
            </SolicitudesProvider>
          </ClientesProvider>
      </CategoriasProvider>
    </ProductosProvider>
  );
}

export default App;