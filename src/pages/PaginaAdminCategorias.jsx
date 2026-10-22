import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionCrud from "../components/organisms/SeccionCrud";
import { useCrud } from "../hooks/useCrud";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useCategorias } from "../context/CategoriasContext";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/categoriasConfig.json";

function PaginaAdminCategorias() {
  const datos = useCategorias();
  const crud = useCrud(datos, textos);

  useTituloPagina("Admin · Categorías");

  return (
    <PlantillaAdmin mensaje={crud.mensaje} onCerrarMensaje={crud.cerrarMensaje}>
      <SeccionCrud
        config={config}
        textos={textos}
        filas={datos.categorias}
        editando={crud.editando}
        onNuevo={crud.abrirNuevo}
        onEditar={crud.abrirEditar}
        onGuardar={crud.guardar}
        onCancelar={crud.cancelar}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminCategorias;