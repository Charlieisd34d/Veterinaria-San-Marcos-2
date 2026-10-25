import React from "react";
import EnlaceNavegacion from "../atoms/EnlaceNavegacion";
import Boton from "../atoms/Boton";

const AccionesNavegacion = ({
  etiquetaCarrito,
  enlaceCarrito,
  activoCarrito,
  textoBoton,
  onClickBoton,
  varianteBoton = "success",
}) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <EnlaceNavegacion
        etiqueta={etiquetaCarrito}
        enlace={enlaceCarrito}
        activo={activoCarrito}
        claseIcono="bi bi-cart3"
      />
      <Boton
        texto={textoBoton}
        variante={varianteBoton}
        onClick={onClickBoton}
      />
    </div>
  );
};

export default AccionesNavegacion;