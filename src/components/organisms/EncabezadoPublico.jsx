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
        
        // Si hay un usuario logueado, mostramos opcionalmente su nombre o "Cerrar Sesión"
        textoBotonInicio={
          props.usuarioLogueado 
            ? "Cerrar Sesión" 
            : props.navegacion.botonInicio.texto
        }
        varianteBotonInicio={
          props.usuarioLogueado 
            ? "outline-danger" 
            : props.navegacion.botonInicio.variante
        }
        
        onNavegar={props.onNavegar}
        
        // Si hay usuario logueado, al presionar ejecuta la función de cerrar sesión.
        // Si no, abre el modal de login.
        onClickInicio={
          props.usuarioLogueado 
            ? props.onCerrarSesion 
            : props.onClickLogin
        } 
      />
    </>
  );
}

export default EncabezadoPublico;