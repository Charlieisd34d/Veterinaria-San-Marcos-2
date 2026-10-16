import Logotipo from '../atoms/Logotipo';
import EnlaceNavegacion from '../atoms/EnlaceNavegacion';
import AccionesNavegacion from '../molecules/AccionesNavegacion';

// Los enlaces son <a> reales (se ven y se comportan como enlaces), pero en vez de
  // recargar la página avisamos a props.onNavegar. preventDefault() cancela la recarga.
  function ir(evento, ruta) {
    evento.preventDefault()
    props.onNavegar(ruta)
  }

  // ...más abajo, dentro del return, cada enlace usa esa función:
  <nav className="enlaces">
    <a href="/catalogo" onClick={(e) => ir(e, '/catalogo')}>
      Catálogo
    </a>
    {props.categorias.map((c) => (
      <a key={c} href={`/categoria/${c}`} onClick={(e) => ir(e, `/categoria/${c}`)}>
        {c}
      </a>
    ))}
  </nav>

export default NavegacionPrincipal;