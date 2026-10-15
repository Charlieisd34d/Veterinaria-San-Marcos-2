const Imagen = ({ ruta, textoAlternativo, clasePersonalizada = "img-fluid rounded-4 shadow-sm w-100 object-fit-cover", altoMaximo = "480px" }) => {
  return (
    <img 
      src={ruta} 
      alt={textoAlternativo} 
      className={clasePersonalizada} 
      style={{ maxHeight: altoMaximo }}
    />
  );
};

export default Imagen;