import TituloSeccion from "../atoms/TituloSeccion";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import TablaAdmin from "./TablaAdmin";

function SeccionListado(props) {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <TituloSeccion texto={props.titulo} />
          <Parrafo texto={props.descripcion} />
        </div>
        {props.textoVolver && (
          <Boton texto={props.textoVolver} variante="outline-secondary" onClick={props.onVolver} />
        )}
      </div>

      <TablaAdmin
        columnas={props.columnas}
        filas={props.filas}
        acciones={props.acciones}
        tituloAcciones={props.tituloAcciones}
        textoVacio={props.textoVacio}
      />
    </section>
  );
}

export default SeccionListado;