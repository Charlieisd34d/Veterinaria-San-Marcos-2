import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useUsuarios } from "../context/UsuariosContext";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/usuariosConfig.json";

function PaginaAdminUsuarios() {
  const datos = useUsuarios();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Usuarios");

  return (
    <PlantillaAdmin mensaje={crud.mensaje} onCerrarMensaje={crud.cerrarMensaje}>
      <SeccionCrud
        config={config}
        textos={textos}
        filas={datos.usuarios}
        editando={crud.editando}
        onNuevo={crud.abrirNuevo}
        onEditar={crud.abrirEditar}
        onEliminar={crud.eliminar}
        onGuardar={crud.guardar}
        onCancelar={crud.cancelar}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminUsuarios;