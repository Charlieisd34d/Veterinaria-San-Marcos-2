import TituloPrincipal from "../atoms/TituloPrincipal";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";

function SeccionNoEncontrada(props) {
  return (
    <section className="text-center py-5">
      <TituloPrincipal texto={props.titulo} />
      <Parrafo texto={props.descripcion} />
      <Boton
        texto={props.botonVolver.texto}
        variante={props.botonVolver.variante}
        onClick={props.onVolver}
      />
    </section>
  );
}

export default SeccionNoEncontrada;