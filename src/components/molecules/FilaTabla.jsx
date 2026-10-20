import Boton from "../atoms/Boton";

function FilaTabla(props) {
  return (
    <tr>
      {props.celdas.map((celda) => (
        <td key={celda.clave}>{celda.valor}</td>
      ))}
      <td className="text-nowrap">
        <div className="d-flex gap-2">
          <Boton texto={props.textoEditar} variante="outline-primary" tamano="sm" onClick={props.onEditar} />
          <Boton texto={props.textoEliminar} variante="outline-danger" tamano="sm" onClick={props.onEliminar} />
        </div>
      </td>
    </tr>
  );
}

export default FilaTabla;