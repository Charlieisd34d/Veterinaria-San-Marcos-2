import BarraLateralAdmin from "../organisms/BarraLateralAdmin";
import AvisoPagina from "../organisms/AvisoPagina";
import { useNavegacionAdmin } from "../../hooks/useNavegacionAdmin";

import admin from "../../data/admin/navegacionAdmin.json";
import textos from "../../data/admin/textosAdmin.json";

function PlantillaAdmin(props) {
  const nav = useNavegacionAdmin(admin);

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
        <AvisoPagina
          mensaje={props.mensaje}
          textoCerrar={textos.textoCerrar}
          onCerrar={props.onCerrarMensaje}
        />

        <main className="container-fluid py-4 px-4">{props.children}</main>
      </div>
    </div>
  );
}

export default PlantillaAdmin;