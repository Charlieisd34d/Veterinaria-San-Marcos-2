import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantillaAdmin from "../components/templates/PlantillaAdmin";
import PanelResumen from "../components/organisms/PanelResumen";
import { useTituloPagina } from "../hooks/useTituloPagina";
import { useProductos } from "../context/ProductosContext";
import { useSolicitudes } from "../context/SolicitudesContext";
import { useCategorias } from "../context/CategoriasContext";
import { useClientes } from "../context/ClientesContext";
import { listarUsuarios } from "../services/usuarioService";
import { cerrarSesion, obtenerTokenAdmin } from "../utils/autenticacion";
import { filtrarCriticos } from "../utils/stock";

import resumen from "../data/admin/resumen.json";
import criticos from "../data/admin/criticosConfig.json";

function PaginaAdminResumen() {
  const navigate = useNavigate();
  const { productos } = useProductos();
  const datosSolicitudes = useSolicitudes();
  const datosCategorias = useCategorias();
  const datosClientes = useClientes();
  const token = obtenerTokenAdmin();
  const [totalUsuarios, setTotalUsuarios] = useState("—");
  const [mensaje, setMensaje] = useState(null);

  useTituloPagina("Admin · Resumen");

  useEffect(() => {
    const peticion = new AbortController();

    async function cargarTotalUsuarios() {
      try {
        const usuarios = await listarUsuarios(token, peticion.signal);
        if (peticion.signal.aborted) return;
        if (!Array.isArray(usuarios)) throw new Error("Respuesta inesperada");
        setTotalUsuarios(usuarios.length);
      } catch (fallo) {
        if (peticion.signal.aborted) return;
        if (fallo.response?.status === 401) {
          cerrarSesion();
          navigate("/iniciar-sesion", { replace: true });
          return;
        }
        setMensaje({ texto: "No se pudo consultar el total de usuarios.", variante: "danger" });
      }
    }

    cargarTotalUsuarios();
    return () => peticion.abort();
  }, [navigate, token]);

  const totales = {
    solicitudes: datosSolicitudes.solicitudes.length,
    productos: productos.length,
    criticos: filtrarCriticos(productos, criticos.umbral).length,
    categorias: datosCategorias.categorias.length,
    clientes: datosClientes.clientes.length,
    usuarios: totalUsuarios,
  };

  return (
    <PlantillaAdmin mensaje={mensaje} onCerrarMensaje={() => setMensaje(null)}>
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