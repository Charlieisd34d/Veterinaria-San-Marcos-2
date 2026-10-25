import { useLocation, useNavigate } from "react-router-dom";

export function useNavegacionPublica(navegacion) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

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
