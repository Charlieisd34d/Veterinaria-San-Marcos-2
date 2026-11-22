import api from "./api";

export async function registrarUsuario(dto) {
  const respuesta = await api.post("/auth/registro", dto);
  return respuesta.data;
}

export async function iniciarSesion(dto) {
  const respuesta = await api.post("/auth/login", dto);
  return respuesta.data;
}
