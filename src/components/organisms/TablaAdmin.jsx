import FilaTabla from "../molecules/FilaTabla";
import Parrafo from "../atoms/Parrafo";

function TablaAdmin(props) {
  if (props.filas.length === 0) {
    return <Parrafo texto={props.textoVacio} />;
  }

  const acciones = props.acciones || [];

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle bg-white">
        <thead>
          <tr>
            {props.columnas.map((columna) => (
              <th key={columna.clave}>{columna.titulo}</th>
            ))}
            {acciones.length > 0 && <th>{props.tituloAcciones}</th>}
          </tr>
        </thead>
        <tbody>
          {props.filas.map((fila) => (
            <FilaTabla
              key={fila.id}
              celdas={props.columnas.map((columna) => ({
                clave: columna.clave,
                valor: fila[columna.clave],
              }))}
              acciones={acciones.map((accion) => ({
                texto: accion.texto,
                variante: accion.variante,
                onClick: () => accion.onClick(fila),
              }))}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaAdmin;