import { useNavigate, useLocation } from "react-router-dom";

export function useNavegacionAdmin(admin) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const enlaces = admin.enlaces.map((enlace) => ({
    ...enlace,
    activo: enlace.enlace === ubicacion.pathname,
  }));

  return { navegar: navegar, admin: { ...admin, enlaces: enlaces } };
}