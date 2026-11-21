// src/components/organisms/SeccionCrud.jsx
import TituloSeccion from "../atoms/TituloSeccion";
import Parrafo from "../atoms/Parrafo";
import Boton from "../atoms/Boton";
import TablaAdmin from "./TablaAdmin";
import FormularioAdmin from "./FormularioAdmin";
import ModalComun from "../molecules/ModalComun";

function SeccionCrud(props) {

  const abierto = Boolean(props.editando);
  const esNuevo = abierto && !props.editando.id;
  const nuevo = props.config.nuevo || props.textos.nuevo;
  const accion = esNuevo ? nuevo : props.textos.editar;

  let acciones = props.accionesExtra || [];
  acciones = acciones.concat([
    { texto: props.textos.editar, variante: "outline-primary", onClick: props.onEditar },
  ]);
  if (props.onEliminar) {
    acciones = acciones.concat([
      {
        texto: props.textos.eliminar,
        variante: "outline-danger",
        onClick: (fila) => props.onEliminar(fila.id),
      },
    ]);
  }

  return (
    <section>
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <TituloSeccion texto={props.config.titulo} />
          <Parrafo texto={props.config.descripcion} />
        </div>
        <Boton
          texto={`${nuevo} ${props.config.singular}`}
          variante="success"
          onClick={props.onNuevo}
        />
      </div>

      <TablaAdmin
        columnas={props.config.columnas}
        filas={props.filas}
        acciones={acciones}
        tituloAcciones={props.textos.tituloAcciones}
        textoVacio={props.textos.vacio}
      />

      <ModalComun
        show={abierto}
        onHide={props.onCancelar}
        titulo={`${accion} ${props.config.singular}`}
      >
        <FormularioAdmin
          campos={props.config.campos}
          valoresIniciales={props.editando}
          textoGuardar={props.textos.guardar}
          textoCancelar={props.textos.cancelar}
          onGuardar={props.onGuardar}
          onCancelar={props.onCancelar}
        />
      </ModalComun>
    </section>
  );
}

export default SeccionCrud;