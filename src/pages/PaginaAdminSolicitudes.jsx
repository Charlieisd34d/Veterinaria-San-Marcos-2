import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import SeccionListado from "../components/organisms/SeccionListado";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudes } from "../context/SolicitudesContext";
import { useClientes } from "../context/ClientesContext";
import { agregarNombreCliente } from "../utils/solicitudes";

import textos from "../data/admin/textosAdmin.json";
import config from "../data/admin/solicitudesConfig.json";

function PaginaAdminSolicitudes() {
  const navigate = useNavigate();
  const datosSolicitudes = useSolicitudes();
  const datosClientes = useClientes();

  useTituloPagina("Admin · Solicitudes");

  const filas = agregarNombreCliente(datosSolicitudes.solicitudes, datosClientes.clientes);
  const acciones = [
    {
      texto: config.textoVer,
      variante: "outline-primary",
      onClick: (fila) => navigate(`/admin/solicitudes/${fila.id}`),
    },
  ];

  return (
    <PlantillaAdmin>
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