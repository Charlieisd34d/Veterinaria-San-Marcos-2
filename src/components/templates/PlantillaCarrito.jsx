import { useNavigate } from 'react-router-dom';
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';
import CarritoOrganismo from '../organisms/CarritoOrganismo';

export function PlantillaCarrito({
  datosBarraSuperior = {},
  datosNavBar = {},
  datosFooter = {},
  carritoProps = {}
}) {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <BarraSuperior {...datosBarraSuperior} />
      <NavBar {...datosNavBar} onNavegar={navigate} />

      <main className="flex-grow-1 py-4">
        <CarritoOrganismo {...carritoProps} />
      </main>

      <Footer {...datosFooter} />
    </div>
  );
}

export default PlantillaCarrito;