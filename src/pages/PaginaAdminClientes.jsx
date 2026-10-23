import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useClientes } from "../context/ClientesContext";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/clienteConfig.json";

function PaginaAdminCliente() {
  const datos = useClientes();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Clientes");

  return (
    <PlantillaAdmin mensaje={crud.mensaje} onCerrarMensaje={crud.cerrarMensaje}>
      <SeccionCrud
        config={config}
        textos={textos}
        filas={datos.clientes}
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

export default PaginaAdminCliente;