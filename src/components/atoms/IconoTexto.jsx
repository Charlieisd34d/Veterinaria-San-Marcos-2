function IconoTexto(props) {
  return (
    <div className="d-inline-flex align-items-center gap-2">
      <i className={props.claseIcono}></i>
      <small>{props.texto}</small>
    </div>
  );
}

export default IconoTexto;