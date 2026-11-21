export function toLoginRequestDTO({ correo, email, password }) {
  return {
    email: String(email ?? correo ?? "").trim().toLowerCase(),
    password: String(password ?? ""),
  };
}

export function toRegistroRequestDTO({ nombre, correo, email, password }) {
  return {
    nombre: String(nombre ?? "").trim(),
    email: String(email ?? correo ?? "").trim().toLowerCase(),
    password: String(password ?? ""),
  };
}

export function fromAuthResponseDTO(data) {
  const usuario = data?.usuario ?? {};
  return {
    token: data?.token ?? "",
    tipo: data?.tipo ?? "Bearer",
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre ?? "",
      correo: usuario.email ?? usuario.correo ?? "",
      rol: String(usuario.rol ?? "DUENO").toLowerCase(),
    },
  };
}
