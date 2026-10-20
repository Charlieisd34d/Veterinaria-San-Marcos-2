import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";
import { useClientes } from "../context/ClientesContext";
import { useUsuarios } from "../context/UsuariosContext";

import resumen from "../data/admin/resumen.json";

function PaginaAdminResumen() {
  const datosProductos = useProductos();
  const datosClientes = useClientes();
  const datosUsuarios = useUsuarios();

  useTituloPagina("Admin · Resumen");

  const totales = {
    productos: datosProductos.productos.length,
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
      />
    </PlantillaAdmin>
  );
}

export default PaginaAdminResumen;