import { useNavigate, useParams } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionListado from "../components/organisms/SeccionListado";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudes } from "../context/SolicitudesContext";
import { useClientes } from "../context/ClientesContext";
import { filtrarPorCliente } from "../utils/solicitudes";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/historialConfig.json";

function PaginaAdminHistorial() {
  const navigate = useNavigate();
  const params = useParams();
  const datosSolicitudes = useSolicitudes();
  const datosClientes = useClientes();

  useTituloPagina("Admin · Historial");

  const id = Number(params.id);
  const cliente = datosClientes.clientes.find((c) => c.id === id) ?? null;
  const titulo = cliente ? `${config.titulo}: ${cliente.nombre}` : config.titulo;

  return (
    <PlantillaAdmin>
      <SeccionListado
        titulo={titulo}
        descripcion={config.descripcion}
        columnas={config.columnas}
        filas={filtrarPorCliente(datosSolicitudes.solicitudes, id)}
        textoVacio={textos.vacio}
        textoVolver={config.textoVolver}
        onVolver={() => navigate("/admin/clientes")}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminHistorial;