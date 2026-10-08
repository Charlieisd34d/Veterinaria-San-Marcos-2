import EnlaceNavegacion from '../atoms/EnlaceNavegacion';
import Boton from '../atoms/Boton'

const AccionesNavegacion = ({ etiquetaCarrito, enlaceCarrito, activoCarrito, etiquetaBoton, alHacerClicBoton }) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <EnlaceNavegacion 
        etiqueta={etiquetaCarrito} 
        enlace={enlaceCarrito} 
        activo={activoCarrito} 
        claseIcono="bi bi-cart3" 
      />
      <Boton 
        etiqueta={etiquetaBoton} 
        variante="success" 
        alHacerClic={alHacerClicBoton} 
      />
    </div>
  );
};

export default AccionesNavegacion;