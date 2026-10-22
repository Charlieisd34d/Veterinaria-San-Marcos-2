function FilaDato(props) {
  return (
    <div className="row mb-2">
      <div className="col-sm-3 fw-semibold">{props.etiqueta}</div>
      <div className="col-sm-9">{props.texto}</div>
    </div>
  );
}

export default FilaDato;