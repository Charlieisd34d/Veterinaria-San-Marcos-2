import api from "./api";

export async function listarUsuarios(token, signal) {
  const respuesta = await api.get("/usuarios", {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  });
  return respuesta.data;
}

export async function actualizarUsuario(id, dto, token) {
  const respuesta = await api.put(`/usuarios/${id}`, dto, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return respuesta.data;
}

export async function desactivarUsuario(id, token) {
  await api.patch(`/usuarios/${id}/desactivar`, null, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
