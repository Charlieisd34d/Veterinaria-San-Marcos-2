import api from "./api";
import {
  toLoginRequestDTO,
  toRegistroRequestDTO,
  fromAuthResponseDTO,
} from "../dtos/authDto";
import { fromUsuarioDTO } from "../dtos/usuarioDto";

export async function loginApi(credenciales) {
  const payload = toLoginRequestDTO(credenciales);
  const { data } = await api.post("/auth/login", payload);
  return fromAuthResponseDTO(data);
}

export async function registroApi(datosRegistro) {
  const payload = toRegistroRequestDTO(datosRegistro);
  const { data } = await api.post("/auth/registro", payload);
  return fromUsuarioDTO(data);
}
