import BarraSuperior from "./BarraSuperior";
import NavegacionPrincipal from "./NavegacionPrincipal";

function EncabezadoPublico(props) {
  const { totalProductos = 0 } = props;
  const navegacion = props.navegacion || {};
  const carrito = navegacion.carrito || {};
  const botonCita = navegacion.botonCita || {};
  const textoBaseCarrito = carrito.etiqueta || "Carrito";

  return (
    <>
      <BarraSuperior elementos={props.barraSuperior} />

      <NavegacionPrincipal
        tituloMarca={navegacion.tituloMarca}
        subtituloMarca={navegacion.subtituloMarca}
        iconoMarca={navegacion.iconoMarca}
        enlaces={navegacion.enlaces}
        etiquetaCarrito={`${textoBaseCarrito} (${totalProductos})`}
        enlaceCarrito={carrito.enlace}
        activoCarrito={carrito.activo}
        claseIconoCarrito={carrito.claseIcono}
        textoBotonCita={botonCita.texto}
        varianteBotonCita={botonCita.variante}
        onNavegar={props.onNavegar}
        onClickCita={props.onClickCita}
      />
    </>
  );
}

export default EncabezadoPublico;
