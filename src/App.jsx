import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para la página principal / Inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Ruta para la vista de Servicios */}
        <Route path="/servicios" element={<Servicios />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;