import EnlaceNavegacion from "../atoms/EnlaceNavegacion";
import Boton from "../atoms/Boton";

function AccionesNavegacion(props) {
  return (
    <div className="d-flex align-items-center gap-3">
      <EnlaceNavegacion
        etiqueta={props.etiquetaCarrito}
        enlace={props.enlaceCarrito}
        activo={props.activoCarrito}
        claseIcono={props.claseIconoCarrito}
        onClick={props.onClickCarrito}
      />
      <Boton
        texto={props.textoBoton}
        variante={props.varianteBoton}
        onClick={props.onClickBoton}
      />
    </div>
  );
}

export default AccionesNavegacion;