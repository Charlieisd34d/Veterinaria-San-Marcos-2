import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useSolicitudes } from "../context/SolicitudesContext";
import { useCategorias } from "../context/CategoriasContext";
import { useClientes } from "../context/ClientesContext";
import { useUsuarios } from "../context/UsuariosContext";
import { filtrarCriticos } from "../utils/stock";

import resumen from "../data/admin/resumen.json";
import criticos from "../data/admin/criticosConfig.json";

function PaginaAdminResumen() {
  const navigate = useNavigate();
  const datosSolicitudes = useSolicitudes();
  const datosCategorias = useCategorias();
  const datosClientes = useClientes();
  const datosUsuarios = useUsuarios();

  useTituloPagina("Admin · Resumen");

  const totales = {
    solicitudes: datosSolicitudes.solicitudes.length,
    criticos: filtrarCriticos(datosCategorias.categorias, criticos.umbral).length,
    categorias: datosCategorias.categorias.length,
    clientes: datosClientes.clientes.length,
    usuarios: datosUsuarios.usuarios.length,
  };

  return (
    <PlantillaAdmin>
      <PanelResumen
        titulo={resumen.titulo}
        descripcion={resumen.descripcion}
        tarjetas={resumen.tarjetas}
        totales={totales}
        textoIr={resumen.textoIr}
        onIr={navigate}
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminResumen;