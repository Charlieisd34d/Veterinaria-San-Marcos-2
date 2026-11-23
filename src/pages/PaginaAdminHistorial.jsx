import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionListado from "../components/organisms/SeccionListado";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudesAdministrativas } from "../hooks/useSolicitudesAdministrativas";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/historialConfig.json";

function PaginaAdminHistorial() {
  const navigate = useNavigate();
  const { filas, error } = useSolicitudesAdministrativas();

  useTituloPagina("Admin · Historial");

  return (
    <PlantillaAdmin>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <SeccionListado
        titulo={config.titulo}
        descripcion={config.descripcion}
        columnas={config.columnas}
        filas={filas}
        textoVacio={textos.vacio}
        textoVolver={config.textoVolver}
        onVolver={() => navigate("/admin/clientes")}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminHistorial;
