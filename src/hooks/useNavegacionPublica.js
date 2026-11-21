<<<<<<< HEAD
import { useNavigate, useLocation } from "react-router-dom";
=======
import { useLocation, useNavigate } from "react-router-dom";
>>>>>>> origin/backup/admin-fix-24-10-2026

export function useNavegacionPublica(navegacion) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

<<<<<<< HEAD
  const enlaces = navegacion.enlaces.map((enlace) => ({
    ...enlace,
    activo: enlace.enlace === ubicacion.pathname,
  }));

  const carrito = {
    ...navegacion.carrito,
    activo: navegacion.carrito.enlace === ubicacion.pathname,
  };

  return {
    navegar: navegar,
    navegacion: { ...navegacion, enlaces: enlaces, carrito: carrito },
  };
}
=======
  const enlaces = (navegacion?.enlaces ?? []).map((enlace) => ({
    ...enlace,
    activo:
      enlace.enlace === "/"
        ? ubicacion.pathname === "/"
        : ubicacion.pathname.startsWith(enlace.enlace),
  }));

  return {
    navegar,
    navegacion: { ...navegacion, enlaces },
  };
}
>>>>>>> origin/backup/admin-fix-24-10-2026
