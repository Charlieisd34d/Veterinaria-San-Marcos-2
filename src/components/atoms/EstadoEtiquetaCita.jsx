const estadoCita = {
  pendiente: "Pendiente",
  confirmada: "Confirmada",
  cancelada: "Cancelada",
  completada: "Completada"
};

function EtiquetaEstadoCita(props) {
  return (
    <div>
      {estadoCita[props.estado] || "Desconocido"}
    </div>
  );
}

export default EtiquetaEstadoCita;