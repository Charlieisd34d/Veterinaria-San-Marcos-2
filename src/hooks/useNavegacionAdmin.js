import { useNavigate, useLocation } from "react-router-dom";

export function useNavegacionAdmin(admin) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

  const enlaces = admin.enlaces.map((enlace) => ({
    ...enlace,
<<<<<<< HEAD
    activo: enlace.enlace === ubicacion.pathname,
=======
    activo:
      enlace.enlace === "/admin"
        ? ubicacion.pathname === "/admin"
        : ubicacion.pathname.startsWith(enlace.enlace),
>>>>>>> origin/backup/admin-fix-24-10-2026
  }));

  return { navegar: navegar, admin: { ...admin, enlaces: enlaces } };
}