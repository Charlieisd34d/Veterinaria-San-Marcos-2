import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import { CategoriasProvider } from "./context/CategoriasContext";
import { ClientesProvider } from "./context/ClientesContext";
import { UsuariosProvider } from "./context/UsuariosContext";
import { SolicitudesProvider } from "./context/SolicitudesContext";
import { ProductosProvider } from "./context/ProductosContext";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaAdminResumen from "./pages/PaginaAdminResumen";
import PaginaAdminSolicitudes from "./pages/PaginaAdminSolicitudes";
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
import PaginaDetalleProducto from "./pages/PaginaDetalleProducto";
import PaginaIniciarSesion from "./pages/PaginaInicioSesion";
import { estaAutenticado } from "./utils/autenticacion";

function RutaAdminProtegida({ children }) {
  return estaAutenticado() ? children : <Navigate to="/iniciar-sesion" replace />;
}

function App() {
  return (
    <CarritoProvider>
      <ProductosProvider>
        <CategoriasProvider>
          <ClientesProvider>
            <SolicitudesProvider>
              <UsuariosProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<PaginaInicio />} />
                    <Route path="/servicios" element={<PaginaServicios />} />
                    <Route path="/productos" element={<PaginaProductos />} />
                    <Route path="/producto/:id" element={<PaginaDetalleProducto />} />
                    <Route path="/nosotros" element={<PaginaNosotros />} />
                    <Route path="/carrito" element={<PaginaCarrito />} />
                    <Route path="/iniciar-sesion" element={<PaginaIniciarSesion />} />

                    <Route path="/admin" element={<RutaAdminProtegida><PaginaAdminResumen /></RutaAdminProtegida>} />
                    <Route path="/admin/solicitudes" element={<RutaAdminProtegida><PaginaAdminSolicitudes /></RutaAdminProtegida>} />
                    <Route path="/admin/productos" element={<RutaAdminProtegida><PaginaAdminProductos /></RutaAdminProtegida>} />
                    <Route path="/admin/categorias" element={<RutaAdminProtegida><PaginaAdminCategorias /></RutaAdminProtegida>} />
                    <Route path="/admin/clientes" element={<RutaAdminProtegida><PaginaAdminClientes /></RutaAdminProtegida>} />
                    <Route path="/admin/usuarios" element={<RutaAdminProtegida><PaginaAdminUsuarios /></RutaAdminProtegida>} />
                    <Route path="/admin/historial" element={<RutaAdminProtegida><PaginaAdminHistorial /></RutaAdminProtegida>} />
                    <Route path="/admin/reporte" element={<RutaAdminProtegida><PaginaAdminReporte /></RutaAdminProtegida>} />
                    <Route path="/admin/reportes" element={<RutaAdminProtegida><PaginaAdminReporte /></RutaAdminProtegida>} />
                    <Route path="/admin/criticos" element={<RutaAdminProtegida><PaginaAdminCriticos /></RutaAdminProtegida>} />

                    <Route path="*" element={<PaginaNoEncontrada />} />
                  </Routes>
                </BrowserRouter>
              </UsuariosProvider>
            </SolicitudesProvider>
          </ClientesProvider>
        </CategoriasProvider>
      </ProductosProvider>
    </CarritoProvider>
  );
}

export default App;