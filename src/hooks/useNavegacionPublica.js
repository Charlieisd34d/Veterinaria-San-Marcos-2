import { useNavigate, useLocation } from "react-router-dom";

export function useNavegacionPublica(navegacion) {
  const navegar = useNavigate();
  const ubicacion = useLocation();

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