import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import PerfilAdmin from "../components/organisms/PerfilAdmin";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudes } from "../context/SolicitudesContext";
import { useProductos } from "../context/ProductosContext";
import { contarPorEstado } from "../utils/solicitudes";
import { filtrarCriticos } from "../utils/stock";

import reportes from "../data/admin/reporte.json";
import perfil from "../data/admin/perfilAdmin.json";
import criticos from "../data/admin/criticosConfig.json";

function PaginaAdminReportes() {
  const datosSolicitudes = useSolicitudes();
  const datosProductos = useProductos();

  useTituloPagina("Admin · Reportes y perfil");

  const solicitudes = datosSolicitudes.solicitudes;
  const totales = {
    total: solicitudes.length,
    pendientes: contarPorEstado(solicitudes, "Pendiente"),
    confirmadas: contarPorEstado(solicitudes, "Confirmada"),
    completadas: contarPorEstado(solicitudes, "Completada"),
    canceladas: contarPorEstado(solicitudes, "Cancelada"),
    criticos: filtrarCriticos(datosProductos.productos, criticos.umbral).length,
  };

  return (
    <PlantillaAdmin>
      <PanelResumen
        titulo={reportes.titulo}
        descripcion={reportes.descripcion}
        tarjetas={reportes.tarjetas}
        totales={totales}
      />
      <PerfilAdmin titulo={perfil.titulo} datos={perfil.datos} />
    </PlantillaAdmin>
  );
}

export default PaginaAdminReportes;