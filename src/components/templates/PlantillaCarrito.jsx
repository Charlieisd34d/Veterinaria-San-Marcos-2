import React from 'react';

// Organismos
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';

// Átomos
import TituloPrincipal from '../atoms/TituloPrincipal';
import Parrafo from '../atoms/Parrafo';
import Boton from '../atoms/Boton';

const PlantillaCarrito = ({
  datosBarraSuperior,
  datosNavBar,
  datosSeccionCarrito,
  datosFooter
}) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Barra Superior */}
      <BarraSuperior {...datosBarraSuperior} />

      {/* 2. Navegación Principal */}
      <NavBar {...datosNavBar} />

      {/* 3. Contenido Principal / Carrito */}
      <main className="flex-grow-1 py-5">
        <div className="container" style={{ maxWidth: '980px' }}>
          
          <TituloPrincipal texto={datosSeccionCarrito.titulo} />
          <Parrafo 
            texto={datosSeccionCarrito.subtitulo} 
            clasePersonalizada="text-secondary fs-6 mb-5"
          />

          {/* Caja principal del carrito */}
          <div className="border rounded-3 p-5 text-center bg-white shadow-sm">
            <div className="py-4">
              <i className="bi bi-cart fs-1 text-success d-block mb-3"></i>
              <Parrafo 
                texto={datosSeccionCarrito.mensajeVacio} 
                clasePersonalizada="text-muted fs-6 mb-4"
              />
              <Boton 
                texto={datosSeccionCarrito.etiquetaBotonAccion}
                variante="success"
                onClick={datosSeccionCarrito.alHacerClicBoton}
              />
            </div>
          </div>

        </div>
      </main>

      {/* 4. Pie de Página */}
      <Footer {...datosFooter} />
    </div>
  );
};

export default PlantillaCarrito;