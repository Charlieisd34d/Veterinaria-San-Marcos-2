import BarraLateralAdmin from "../organisms/BarraLateralAdmin";
import PanelResumen from "../organisms/PanelResumen";
import { useNavegacionAdmin } from "../../hooks/useNavegacionAdmin";

function PlantillaAdminResumen(props) {
  const nav = useNavegacionAdmin(props.admin);

  return (
    <div className="d-flex min-vh-100">
      <BarraLateralAdmin
        tituloMarca={nav.admin.tituloMarca}
        subtituloMarca={nav.admin.subtituloMarca}
        iconoMarca={nav.admin.iconoMarca}
        enlaces={nav.admin.enlaces}
        volver={nav.admin.volver}
        onNavegar={nav.navegar}
      />

      <div className="flex-grow-1 bg-light">
        <main className="container-fluid py-4 px-4">
          <PanelResumen
            titulo={props.resumen.titulo}
            descripcion={props.resumen.descripcion}
            tarjetas={props.resumen.tarjetas}
            totales={props.totales}
            cargando={props.cargando}
            textoCargando={props.textoCargando}
          />
        </main>
      </div>
    </div>
  );
}

export default PlantillaAdminResumen;