import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionListado from "../components/organisms/SeccionListado";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";
import { filtrarCriticos } from "../utils/stock";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/criticosConfig.json";

function PaginaAdminCriticos() {
  const datos = useProductos();

  useTituloPagina("Admin · Ítems críticos");

  return (
    <PlantillaAdmin>
      <SeccionListado
        titulo={config.titulo}
        descripcion={config.descripcion}
        columnas={config.columnas}
        filas={filtrarCriticos(datos.productos, config.umbral)}
        textoVacio={textos.vacio}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminCriticos;