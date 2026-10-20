import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductosProvider } from "./context/ProductosContext";
import { ClientesProvider } from "./context/ClientesContext";
import { UsuariosProvider } from "./context/UsuariosContext";
import PaginaInicio from "./pages/PaginaInicio";
import PaginaServicios from "./pages/PaginaServicios";
import PaginaAdminResumen from "./pages/PaginaAdminResumen";
import PaginaAdminProductos from "./pages/PaginaAdminProductos";
import PaginaAdminClientes from "./pages/PaginaAdminClientes";
import PaginaAdminUsuarios from "./pages/PaginaAdminUsuarios";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";

// El mapa de rutas: para cada dirección, qué página se dibuja.
// BrowserRouter activa la navegación (lee y cambia la dirección del navegador),
// Routes elige UNA Route según la dirección actual y dibuja su "element".
// Un ":" en el path crea un parámetro: la parte de la dirección que cambia.
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
              <Route path="/admin/clientes" element={<PaginaAdminClientes />} />
              <Route path="/admin/usuarios" element={<PaginaAdminUsuarios />} />
              <Route path="*" element={<PaginaNoEncontrada />} />
            </Routes>
          </BrowserRouter>
        </UsuariosProvider>
      </ClientesProvider>
    </ProductosProvider>
  );
}

export default App;
