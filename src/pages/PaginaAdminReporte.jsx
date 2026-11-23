import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import PerfilAdmin from "../components/organisms/PerfilAdmin";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudesAdministrativas } from "../hooks/useSolicitudesAdministrativas";
import { obtenerSesion } from "../utils/autenticacion";
import { useProductos } from "../context/ProductosContext";
import { contarPorEstado } from "../utils/solicitudes";
import { filtrarCriticos } from "../utils/stock";

import reportes from "../data/admin/reporte.json";
import perfil from "../data/admin/perfilAdmin.json";
import criticos from "../data/admin/criticosConfig.json";

function PaginaAdminReportes() {
  const { filas: solicitudes, error: errorSolicitudes } = useSolicitudesAdministrativas();
  const datosProductos = useProductos();

  useTituloPagina("Admin · Reportes y perfil");

  const usuario = obtenerSesion()?.usuario;
  const perfilActivo = { ...usuario, rol: usuario?.rol === "ADMIN" ? "Administrador" : usuario?.rol };
  const datosPerfil = perfil.datos.map(({ clave, ...dato }) => ({ ...dato, texto: perfilActivo[clave] || "—" }));
  const contar = (...estados) => errorSolicitudes
    ? "—"
    : estados.reduce((total, estado) => total + contarPorEstado(solicitudes, estado), 0);

  const totales = {
    total: errorSolicitudes ? "—" : solicitudes.length,
    pendientes: contar("Pendiente"),
    confirmadas: contar("Confirmada"),
    completadas: contar("Completada", "Realizada"),
    canceladas: contar("Cancelada"),
    reprogramadas: contar("Reprogramada"),
    criticos: filtrarCriticos(datosProductos.productos, criticos.umbral).length,
  };

  return (
    <PlantillaAdmin>
      {errorSolicitudes && <div className="alert alert-danger" role="alert">{errorSolicitudes}</div>}
      <PanelResumen
        titulo={reportes.titulo}
        descripcion={reportes.descripcion}
        tarjetas={reportes.tarjetas}
        totales={totales}
      />
      <PerfilAdmin titulo={perfil.titulo} datos={datosPerfil} />
    </PlantillaAdmin>
  );
}

export default PaginaAdminReportes;