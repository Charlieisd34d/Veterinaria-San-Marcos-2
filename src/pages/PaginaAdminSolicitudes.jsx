import { useLocation, useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionListado from "../components/organisms/SeccionListado";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudesAdministrativas } from "../hooks/useSolicitudesAdministrativas";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/solicitudesConfig.json";

function PaginaAdminSolicitudes() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { filas, error } = useSolicitudesAdministrativas();

  useTituloPagina("Admin · Solicitudes");

  const acciones = [
    {
      texto: config.textoVer,
      variante: "outline-primary",
      onClick: (fila) => navigate(`/admin/solicitudes/${fila.id}`),
    },
  ];

  return (
    <PlantillaAdmin>
      {state?.citaEliminada && <div className="alert alert-success" role="status">Cita eliminada.</div>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <SeccionListado
        titulo={config.titulo}
        descripcion={config.descripcion}
        columnas={config.columnas}
        filas={filas}
        acciones={acciones}
        tituloAcciones={textos.tituloAcciones}
        textoVacio={textos.vacio}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminSolicitudes;