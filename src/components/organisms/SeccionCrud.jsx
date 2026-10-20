import TituloSeccion from "../atoms/TituloSeccion";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import TablaAdmin from "./TablaAdmin";
import FormularioAdmin from "./FormularioAdmin";

function SeccionCrud(props) {
  let contenido;

  if (props.formularioAbierto) {
    contenido = (
      <FormularioAdmin
        titulo={props.itemEditando ? props.config.tituloEditar : props.config.tituloNuevo}
        campos={props.config.campos}
        valoresIniciales={props.itemEditando}
        textoGuardar={props.textos.guardar}
        textoCancelar={props.textos.cancelar}
        onGuardar={props.onGuardar}
        onCancelar={props.onCancelar}
      />
    );
  } else if (props.cargando) {
    contenido = <Parrafo texto={props.textos.cargando} />;
  } else {
    contenido = (
      <TablaAdmin
        columnas={props.config.columnas}
        filas={props.filas}
        tituloAcciones={props.textos.tituloAcciones}
        textoEditar={props.textos.editar}
        textoEliminar={props.textos.eliminar}
        textoVacio={props.textos.vacio}
        onEditar={props.onEditar}
        onEliminar={props.onEliminar}
      />
    );
  }

  return (
    <section>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <TituloSeccion texto={props.config.titulo} />
          <Parrafo texto={props.config.descripcion} />
        </div>
        {!props.formularioAbierto && (
          <Boton texto={props.config.textoNuevo} variante="success" onClick={props.onNuevo} />
        )}
      </div>

      {contenido}
    </section>
  );
}

export default SeccionCrud;