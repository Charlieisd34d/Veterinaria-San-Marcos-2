import EtiquetaSeccion from "../atoms/EtiquetaSeccion";
import TituloPrincipal from "../atoms/TituloPrincipal";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import Imagen from "../atoms/Imagen";

function SeccionHero(props) {
  return (
    <section className="row align-items-center g-4">
      <div className="col-lg-6">
        {props.etiqueta && <EtiquetaSeccion texto={props.etiqueta} />}

        <TituloPrincipal texto={props.titulo} />
        <Parrafo texto={props.descripcion} />

        <div className="d-flex gap-3 mt-4">
          <Boton
            texto={props.botonPrimario.texto}
            variante={props.botonPrimario.variante}
            onClick={props.onClickPrimario}
          />
          {props.botonSecundario && (
            <Boton
              texto={props.botonSecundario.texto}
              variante={props.botonSecundario.variante}
              onClick={props.onClickSecundario}
            />
          )}
        </div>
      </div>

      <div className="col-lg-6 text-center">
        <Imagen
          ruta={props.rutaImagen}
          textoAlternativo={props.textoAlternativo}
        />
      </div>
    </section>
  );
}

export default SeccionHero;