export function fromUsuarioDTO(usuarioBackend) {
  return {
    id: usuarioBackend.id,
    nombre: usuarioBackend.nombre ?? "",
    correo: usuarioBackend.email ?? usuarioBackend.correo ?? "",
    email: usuarioBackend.email ?? usuarioBackend.correo ?? "",
    rol: String(usuarioBackend.rol ?? "DUENO").toLowerCase(),
    activo: usuarioBackend.activo ?? true,
    estado: usuarioBackend.activo === false ? "Inactivo" : "Activo",
  };
}

export function fromUsuariosListDTO(listaBackend) {
  if (!Array.isArray(listaBackend)) return [];
  return listaBackend.map(fromUsuarioDTO);
}

export function toUpdateUsuarioRequestDTO(cambios) {
  return {
    nombre: String(cambios?.nombre ?? "").trim(),
  };
}
