const IconoTexto = ({ claseIcono, texto, clasePersonalizada = "d-inline-flex align-items-center gap-2" }) => {
  return (
    <div className={clasePersonalizada}>
      <i className={claseIcono}></i>
      <small>{texto}</small>
    </div>
  );
};

export default IconoTexto;