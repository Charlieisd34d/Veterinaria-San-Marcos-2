import BarraLateralAdmin from "../organisms/BarraLateralAdmin";
import AvisoPagina from "../organisms/AvisoPagina";
import SeccionCrud from "../organisms/SeccionCrud";
import { useNavegacionAdmin } from "../../hooks/useNavegacionAdmin";

function PlantillaAdminCrud(props) {
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
        <AvisoPagina
          mensaje={props.mensaje}
          textoCerrar={props.textos.textoCerrar}
          onCerrar={props.onCerrarMensaje}
        />

        <main className="container-fluid py-4 px-4">
          <SeccionCrud
            config={props.config}
            textos={props.textos}
            filas={props.filas}
            cargando={props.cargando}
            formularioAbierto={props.formularioAbierto}
            itemEditando={props.itemEditando}
            onNuevo={props.onNuevo}
            onEditar={props.onEditar}
            onEliminar={props.onEliminar}
            onGuardar={props.onGuardar}
            onCancelar={props.onCancelar}
          />
        </main>
      </div>
    </div>
  );
}

export default PlantillaAdminCrud;