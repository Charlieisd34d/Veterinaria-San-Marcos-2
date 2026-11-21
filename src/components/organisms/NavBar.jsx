import React from 'react';
import Logotipo from '../atoms/Logotipo';
import EnlaceNavegacion from '../atoms/EnlaceNavegacion';
import AccionesNavegacion from '../molecules/AccionesNavegacion';
import { useCarrito } from '../../context/CarritoContext';

const NavegacionPrincipal = ({ 
  tituloMarca, 
  subtituloMarca, 
  iconoMarca, 
  listaEnlaces = [], 
  enlaceCarrito = "/carrito", 
  activoCarrito, 
  etiquetaBotonCita, 
  alHacerClicCita 
}) => {
  const { totalProductos } = useCarrito(); // <-- Estado reactivo en tiempo real

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Logotipo 
          titulo={tituloMarca} 
          subtitulo={subtituloMarca} 
          claseIcono={iconoMarca} 
        />
        
        <div className="d-flex align-items-center gap-2">
          {listaEnlaces.map((item, indice) => (
            <EnlaceNavegacion 
              key={indice} 
              etiqueta={item.etiqueta} 
              enlace={item.enlace} 
              activo={item.activo} 
            />
          ))}
        </div>

        <AccionesNavegacion 
          etiquetaCarrito={`(${totalProductos})`} 
          enlaceCarrito={enlaceCarrito} 
          activoCarrito={activoCarrito} 
          etiquetaBoton={etiquetaBotonCita} 
          alHacerClicBoton={alHacerClicCita} 
        />
      </div>
    </nav>
  );
};

export default NavegacionPrincipal;