export const ADMINISTRADORES = [
  { id: 1, nombre: "Ana González", correo: "ana@veterinaria.cl", password: "admin123", rol: "admin" },
  { id: 2, nombre: "Luis Pérez", correo: "luis@veterinaria.cl", password: "admin456", rol: "admin" },
];

export function validarCredenciales(correo, password) {
  const correoNormalizado = String(correo ?? "").trim().toLowerCase();
  const passwordNormalizado = String(password ?? "").trim();

  return ADMINISTRADORES.find(
    (usuario) => usuario.correo.toLowerCase() === correoNormalizado && usuario.password === passwordNormalizado,
  ) ?? null;
}

export function estaAutenticado() {
  const valor = localStorage.getItem("admin_autenticado");
  if (!valor) return false;

  try {
    const usuario = JSON.parse(valor);
    return Boolean(usuario?.correo);
  } catch {
    return false;
  }
}

export function guardarSesion(usuario) {
  localStorage.setItem("admin_autenticado", JSON.stringify({
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol,
  }));
}

export function cerrarSesion() {
  localStorage.removeItem("admin_autenticado");
}
