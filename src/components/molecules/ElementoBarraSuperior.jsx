import Imagen from '../atoms/Imagen';

const ElementoBarraSuperior = ({ rutaImagen, textoAlternativo, clasePersonalizada = "img-fluid" }) => {
  return (
    <Imagen 
      ruta={rutaImagen} 
      textoAlternativo={textoAlternativo} 
      clasePersonalizada={clasePersonalizada} 
    />
  );
};

export default ElementoBarraSuperior;