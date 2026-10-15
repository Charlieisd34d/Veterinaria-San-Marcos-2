import React from 'react';
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';

const PlantillaPublica = ({
  datosBarraSuperior,
  datosNavBar,
  datosFooter,
  children
}) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      {/* 1. Barra superior */}
      <BarraSuperior {...datosBarraSuperior} />

      {/* 2. Barra de navegación */}
      <NavBar {...datosNavBar} />

      {/* 3. Contenido principal dinámico */}
      <main className="flex-grow-1 container-fluid px-5 py-4">
        {children}
      </main>

      {/* 4. Pie de página */}
      <Footer {...datosFooter} />
    </div>
  );
};

export default PlantillaPublica;