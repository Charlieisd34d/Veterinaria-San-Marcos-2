import BarraSuperior from "./BarraSuperior";
import NavegacionPrincipal from "./NavegacionPrincipal";

function EncabezadoPublico(props) {
  return (
    <>
      <BarraSuperior 
        elementos={props.barraSuperior} 
        onNavegar={props.onNavegar}
        />
      <NavegacionPrincipal
        tituloMarca={props.navegacion.tituloMarca}
        subtituloMarca={props.navegacion.subtituloMarca}
        iconoMarca={props.navegacion.iconoMarca}
        enlaces={props.navegacion.enlaces}
        etiquetaCarrito={props.navegacion.carrito.etiqueta}
        enlaceCarrito={props.navegacion.carrito.enlace}
        activoCarrito={props.navegacion.carrito.activo}
        claseIconoCarrito={props.navegacion.carrito.claseIcono}
        textoBotonCita={props.navegacion.botonCita.texto}
        varianteBotonCita={props.navegacion.botonCita.variante}
        onNavegar={props.onNavegar}
        onClickCita={props.onClickCita}
      />
    </>
  );
}

export default EncabezadoPublico;