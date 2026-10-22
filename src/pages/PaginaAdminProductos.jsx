import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/productosConfig.json";

function PaginaAdminProductos() {
  const datos = useProductos();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Catálogo");

  return (
    <PlantillaAdmin mensaje={crud.mensaje} onCerrarMensaje={crud.cerrarMensaje}>
      <SeccionCrud
        config={config}
        textos={textos}
        filas={datos.productos}
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

export default PaginaAdminProductos;