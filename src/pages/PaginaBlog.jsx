import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import ListaServicios from '../components/organisms/ListaServicios';
import { useTituloPagina } from '../hooks/useTituloPagina';
import articulosBlog from '../data/blog.json';

export default function PaginaBlog() {
  useTituloPagina('Blog');
  const navigate = useNavigate();

  function manejarLeerArticulo(id) {
    console.log("Leer artículo:", id);
  }

  const articulosConAccion = articulosBlog.map(art => ({
    ...art,
    onAccion: manejarLeerArticulo
  }));

  return (
    <PlantillaPublica>
      <div className="container py-4">
        <ListaServicios 
          tituloSeccion="Blog"
          descripcionSeccion="Consejos breves para cuidar la salud y el bienestar de tu mascota."
          items={articulosConAccion}
        />
      </div>
    </PlantillaPublica>
  );
}