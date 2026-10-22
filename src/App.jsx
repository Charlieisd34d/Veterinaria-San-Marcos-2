<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosProvider } from './context/ProductosContext';
import { CarritoProvider } from './context/CarritoContext';
import Inicio from './pages/Inicio';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Productos from './pages/Productos';
=======
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
>>>>>>> 308780f (fix: se arreglo el repositorio debido aun problema de ramas.)




function App() {

  return (
    <ProductosProvider>
<<<<<<< HEAD
    <CarritoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>
    </BrowserRouter>
     </CarritoProvider>
=======
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
>>>>>>> 308780f (fix: se arreglo el repositorio debido aun problema de ramas.)
    </ProductosProvider>
   
  );
}
export default App
