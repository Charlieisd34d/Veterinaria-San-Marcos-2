import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'
import Login from './pages/Login'
import Servicios from './pages/Servicios';
import NoEncontrada from './pages/NoEncontrada'

// El mapa de rutas: para cada dirección, qué página se dibuja.
// BrowserRouter activa la navegación (lee y cambia la dirección del navegador),
// Routes elige UNA Route según la dirección actual y dibuja su "element".
// Un ":" en el path crea un parámetro: la parte de la dirección que cambia.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:nombre" element={<Catalogo />} />
        <Route path="/buscar/:texto" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}