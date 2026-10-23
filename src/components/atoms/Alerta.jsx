function Alerta(props) {
  return (
    <div className={`alert alert-${props.variante || "info"} mb-0`} role="alert">
      {props.texto}
    </div>
  );
}

export default Alerta;