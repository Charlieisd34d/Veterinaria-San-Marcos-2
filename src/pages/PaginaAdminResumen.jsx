import PlantillaAdminResumen from "../components/templates/PlantillaAdminResumen";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";
import { useClientes } from "../context/ClientesContext";
import { useUsuarios } from "../context/UsuariosContext";

import admin from "../data/admin/navegacionAdmin.json";
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
    <PlantillaAdminResumen
      admin={admin}
      resumen={resumen}
      totales={totales}
    />
  );
}

export default PaginaAdminResumen;