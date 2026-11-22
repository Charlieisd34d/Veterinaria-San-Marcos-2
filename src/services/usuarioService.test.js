import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "./api";
import { iniciarSesion, registrarUsuario } from "./authService";
import { actualizarUsuario, desactivarUsuario, listarUsuarios } from "./usuarioService";
import { crearActualizacionUsuarioDto, crearLoginDto, crearRegistroUsuarioDto } from "../dto/usuarioDto";

const usuario = { id: 1, nombre: "Ana", correo: "ana@test.cl", rol: "CLIENTE", activo: true };
const token = "jwt-de-prueba";
const formulario = { nombre: " Ana ", correo: " ana@test.cl ", password: " clave segura ", rol: "ADMIN" };

let adapterOriginal;
const responder = vi.fn();

beforeEach(() => {
  adapterOriginal = api.defaults.adapter;
  api.defaults.adapter = async (config) => ({
    config,
    data: responder(config),
    status: 200,
    statusText: "OK",
    headers: {},
  });
});

afterEach(() => {
  api.defaults.adapter = adapterOriginal;
  responder.mockReset();
});

describe("API de usuarios", () => {
  it("envía correo y contraseña y retorna el objeto de sesión completo", async () => {
    const sesion = { token, tipo: "Bearer", usuario };
    responder.mockReturnValue(sesion);

    expect(await iniciarSesion(crearLoginDto(formulario))).toEqual(sesion);
    const [peticion] = responder.mock.lastCall;
    expect(peticion).toMatchObject({ method: "post", url: "/auth/login" });
    expect(JSON.parse(peticion.data)).toEqual({ correo: "ana@test.cl", password: " clave segura " });
  });

  it("registra con nombre, correo y contraseña", async () => {
    responder.mockReturnValue(usuario);

    expect(await registrarUsuario(crearRegistroUsuarioDto(formulario))).toEqual(usuario);
    const [peticion] = responder.mock.lastCall;
    expect(peticion).toMatchObject({ method: "post", url: "/auth/registro" });
    expect(JSON.parse(peticion.data)).toEqual({
      nombre: "Ana", correo: "ana@test.cl", password: " clave segura ",
    });
  });

  it("lista con autorización y devuelve el arreglo directamente", async () => {
    responder.mockReturnValue([usuario]);

    expect(await listarUsuarios(token)).toEqual([usuario]);
    const [peticion] = responder.mock.lastCall;
    expect(peticion).toMatchObject({ method: "get", url: "/usuarios" });
    expect(peticion.headers.get("Authorization")).toBe(`Bearer ${token}`);
  });

  it("edita solo nombre y correo con autorización", async () => {
    responder.mockReturnValue(usuario);

    expect(await actualizarUsuario(1, crearActualizacionUsuarioDto(formulario), token)).toEqual(usuario);
    const [peticion] = responder.mock.lastCall;
    expect(peticion).toMatchObject({ method: "put", url: "/usuarios/1" });
    expect(peticion.headers.get("Authorization")).toBe(`Bearer ${token}`);
    expect(JSON.parse(peticion.data)).toEqual({ nombre: "Ana", correo: "ana@test.cl" });
  });

  it("desactiva con autorización aunque la respuesta llegue sin cuerpo", async () => {
    await expect(desactivarUsuario(1, token)).resolves.toBeUndefined();
    const [peticion] = responder.mock.lastCall;
    expect(peticion).toMatchObject({ method: "patch", url: "/usuarios/1/desactivar" });
    expect(peticion.headers.get("Authorization")).toBe(`Bearer ${token}`);
  });
});
