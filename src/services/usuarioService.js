import usuariosIniciales from "../data/admin/usuariosIniciales.json";
import api from "./api";
import {
  fromUsuarioDTO,
  fromUsuariosListDTO,
  toUpdateUsuarioRequestDTO,
} from "../dtos/usuarioDto";
import { toRegistroRequestDTO } from "../dtos/authDto";

export async function obtenerUsuariosApi() {
  const { data } = await api.get("/usuarios");
  return fromUsuariosListDTO(data);
}

export async function registrarUsuarioApi(datos) {
  const payload = toRegistroRequestDTO({
    nombre: datos.nombre,
    correo: datos.correo ?? datos.email,
    password: datos.password || "Vet123456",
  });
  const { data } = await api.post("/auth/registro", payload);
  return fromUsuarioDTO(data);
}

export async function actualizarUsuarioApi(id, cambios) {
  const payload = toUpdateUsuarioRequestDTO(cambios);
  const { data } = await api.put(`/usuarios/${id}`, payload);
  return fromUsuarioDTO(data);
}

export async function desactivarUsuarioApi(id) {
  const { data } = await api.delete(`/usuarios/${id}`);
  return data;
}

const CLAVE = "usuarios";

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(usuariosIniciales));
    return [...usuariosIniciales];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

export function listarUsuarios() {
  return leer();
}

export function obtenerUsuario(id) {
  return leer().find((usuario) => usuario.id === id) ?? null;
}

export function crearUsuario(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((usuario) => usuario.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  guardar([...lista, nuevo]);
  return nuevo;
}

export function actualizarUsuario(id, cambios) {
  const lista = leer().map((usuario) =>
    usuario.id === id ? { ...usuario, ...cambios } : usuario
  );
  guardar(lista);
  return lista.find((usuario) => usuario.id === id) ?? null;
}

export function eliminarUsuario(id) {
  guardar(leer().filter((usuario) => usuario.id !== id));
}
