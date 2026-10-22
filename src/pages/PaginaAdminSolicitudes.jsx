import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useClientes } from "../context/ClientesContext";
import { useSolicitudes } from "../context/SolicitudesContext";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/solicitudesConfig.json";

function PaginaAdminSolicitudes() {
  const datos = useSolicitudes();
  const { clientes } = useClientes();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Solicitudes");

  const filas = datos.solicitudes.map((solicitud) => {
    const cliente = clientes.find((item) => item.id === solicitud.clienteId);
    return { ...solicitud, cliente: cliente?.nombre ?? "Cliente no encontrado" };
  });

  return (
    <PlantillaAdmin mensaje={crud.mensaje} onCerrarMensaje={crud.cerrarMensaje}>
      <SeccionCrud
        config={config}
        textos={textos}
        filas={filas}
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

export default PaginaAdminSolicitudes;