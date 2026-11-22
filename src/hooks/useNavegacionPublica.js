import { useLocation, useNavigate } from "react-router-dom";
import { useClienteCitas } from "./useClienteCitas";

export function useNavegacionPublica(navegacion) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const cliente = useClienteCitas();
  const enlaces = (navegacion?.enlaces ?? [])
    .filter((enlace) => !enlace.soloClientes || cliente)
    .map((enlace) => ({
      ...enlace,
      activo: ubicacion.pathname === enlace.enlace || ubicacion.pathname.startsWith(`${enlace.enlace}/`),
    }));

  return {
    navegar,
    navegacion: { ...navegacion, enlaces },
  };
}
