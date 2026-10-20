import PlantillaAdminCrud from "../components/templates/PlantillaAdminCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";

import admin from "../data/admin/navegacionAdmin.json";
import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/productosConfig.json";

function PaginaAdminProductos() {
  const datos = useProductos();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Productos");

  return (
    <PlantillaAdminCrud
      admin={admin}
      textos={textos}
      config={config}
      filas={datos.productos}
      editando={crud.editando}
      mensaje={crud.mensaje}
      onNuevo={crud.abrirNuevo}
      onEditar={crud.abrirEditar}
      onEliminar={crud.eliminar}
      onGuardar={crud.guardar}
      onCancelar={crud.cancelar}
      onCerrarMensaje={crud.cerrarMensaje}
    />
  );
}

export default PaginaAdminProductos;