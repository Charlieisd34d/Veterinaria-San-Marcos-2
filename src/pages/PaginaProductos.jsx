import PlantillaPublica from '../components/templates/PlantillaPublica';
import CatalogoProductos from '../components/organisms/CatalogoProductos';
import { useProductos } from '../context/ProductosContext';

export default function PaginaProductos() {
  const { productos } = useProductos();

  return (
    <PlantillaPublica>
      <CatalogoProductos productos={productos} />
    </PlantillaPublica>
  );
}
