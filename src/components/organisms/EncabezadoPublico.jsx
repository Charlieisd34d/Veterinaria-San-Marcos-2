import BarraSuperior from "./BarraSuperior";
import NavegacionPrincipal from "./NavegacionPrincipal";

function EncabezadoPublico(props) {
  return (
    <>
      <BarraSuperior elementos={props.barraSuperior} />
      <NavegacionPrincipal
        tituloMarca={props.navegacion.tituloMarca}
        subtituloMarca={props.navegacion.subtituloMarca}
        iconoMarca={props.navegacion.iconoMarca}
        enlaces={props.navegacion.enlaces}
        etiquetaCarrito={props.navegacion.carrito.etiqueta}
        enlaceCarrito={props.navegacion.carrito.enlace}
        activoCarrito={props.navegacion.carrito.activo}
        claseIconoCarrito={props.navegacion.carrito.claseIcono}
        textoBotonInicio={props.navegacion.botonInicio.texto}
        varianteBotonInicio={props.navegacion.botonInicio.variante}
        onNavegar={props.onNavegar}
        onClickInicio={props.onClickLogin} 
      />
    </>
  );
}

export default EncabezadoPublico;