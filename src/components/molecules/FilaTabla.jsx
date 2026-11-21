import Boton from "../atoms/Boton";

function FilaTabla(props) {
  return (
    <tr>
      {props.celdas.map((celda) => (
        <td key={celda.clave}>{celda.valor}</td>
      ))}
      {props.acciones.length > 0 && (
        <td className="text-nowrap">
          <div className="d-flex gap-2">
            {props.acciones.map((accion) => (
              <Boton
                key={accion.texto}
                texto={accion.texto}
                variante={accion.variante}
                tamano="sm"
                onClick={accion.onClick}
              />
            ))}
          </div>
        </td>
      )}
    </tr>
  );
}

export default FilaTabla;