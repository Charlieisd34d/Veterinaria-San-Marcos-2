import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servicios from './pages/Servicios';
import Inicio from './pages/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;