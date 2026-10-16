import { useNavigate } from 'react-router-dom'
import BarraSuperior from '../organisms/BarraSuperior';
import NavBar from '../organisms/NavBar';
import Footer from '../organisms/Footer';

// Plantilla: arma la estructura común de las páginas (cabecera, contenido y pie).
// Solo las páginas y las plantillas usan el router. Los componentes de abajo
// (Navbar, Footer) no lo conocen: reciben funciones por props y las llaman.
export function PlantillaPublica(props) {
  // useNavigate entrega la función navigate: navigate('/catalogo') cambia de página.
  const navigate = useNavigate()

  return (
    <>
      <NavBar
        categorias={categorias}
        onNavegar={navigate}
        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />
      <main className="contenido">
        {/* props.children es el contenido que cada página pone dentro de <PlantillaPublica> */}
        {props.children}
      </main>
      <Footer onNavegar={navigate} />
    </>
  )
}
export default PlantillaPublica;