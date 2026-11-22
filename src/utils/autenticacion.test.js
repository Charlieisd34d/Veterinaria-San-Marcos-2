import { beforeEach, describe, expect, it } from "vitest";
import { guardarSesion, estaAutenticado, cerrarSesion, obtenerTokenAdmin } from "./autenticacion";

const sesion = {
  token: "jwt-de-prueba",
  usuario: { id: 1, nombre: "Ana", correo: "ana@veterinaria.cl", rol: "ADMIN" },
};

beforeEach(() => {
  localStorage.clear();
});

describe("autenticación", () => {
  it("recupera el token del administrador autenticado", () => {
    guardarSesion(sesion);
    expect(estaAutenticado()).toBe(true);
    expect(obtenerTokenAdmin()).toBe(sesion.token);
  });

  it("rechaza cuentas de clientes", () => {
    guardarSesion({ ...sesion, usuario: { ...sesion.usuario, rol: "CLIENTE" } });
    expect(estaAutenticado()).toBe(false);
  });

  it("ignora el formato anterior de sesión local", () => {
    localStorage.setItem("admin_autenticado", JSON.stringify(sesion.usuario));
    expect(estaAutenticado()).toBe(false);
  });

  it("ignora una sesión malformada", () => {
    localStorage.setItem("admin_autenticado", "{");
    expect(estaAutenticado()).toBe(false);
  });

  it("cierra la sesión", () => {
    guardarSesion(sesion);
    cerrarSesion();
    expect(estaAutenticado()).toBe(false);
  });
});
