import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductosProvider } from './context/ProductosContext';
import { CarritoProvider } from './context/CarritoContext';
import Inicio from './pages/Inicio';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import Productos from './pages/Productos';

function App() {

  return (
    <ProductosProvider>
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
    </ProductosProvider>
   
  );
}
export default App
