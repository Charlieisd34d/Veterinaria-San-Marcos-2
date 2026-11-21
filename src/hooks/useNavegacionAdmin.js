import { useNavigate, useLocation } from "react-router-dom";

export function useNavegacionAdmin(admin) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const enlaces = admin.enlaces.map((enlace) => ({
    ...enlace,
    activo:
      enlace.enlace === "/admin"
        ? ubicacion.pathname === "/admin"
        : ubicacion.pathname.startsWith(enlace.enlace),
  }));

  return { navegar: navegar, admin: { ...admin, enlaces: enlaces } };
}