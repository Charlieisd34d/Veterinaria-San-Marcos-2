const CLAVE_SESION = "admin_autenticado";

export function obtenerSesion() {
  try {
    const sesion = JSON.parse(localStorage.getItem(CLAVE_SESION));
    if (typeof sesion?.token === "string" && sesion.token && sesion.usuario?.rol) {
      return sesion;
    }
  } catch {
    return null;
  }

  return null;
}

export function obtenerTokenAdmin() {
  const sesion = obtenerSesion();
  return sesion?.usuario?.rol === "ADMIN" ? sesion.token : "";
}

export function estaAutenticado() {
  return Boolean(obtenerTokenAdmin());
}

export function guardarSesion(sesion) {
  localStorage.setItem(CLAVE_SESION, JSON.stringify({
    token: sesion.token,
    usuario: sesion.usuario,
  }));
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
}
