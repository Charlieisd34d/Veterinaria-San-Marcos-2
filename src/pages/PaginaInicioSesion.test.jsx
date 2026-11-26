import { act, fireEvent, render, screen } from "@testing-library/react";
import { CarritoProvider } from "../context/CarritoContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PaginaInicioSesion from "./PaginaInicioSesion";
import PaginaRegistro from "./PaginaRegistro";
import { iniciarSesion, registrarUsuario } from "../services/authService";
import { estaAutenticado, obtenerSesion } from "../utils/autenticacion";

vi.mock("../services/authService", () => ({ iniciarSesion: vi.fn(), registrarUsuario: vi.fn() }));

beforeEach(() => localStorage.clear());

afterEach(() => vi.resetAllMocks());

function abrirRuta(ruta = "/iniciar-sesion") {
  render(
    <CarritoProvider>
      <MemoryRouter initialEntries={[ruta]}>
        <Routes>
          <Route path="/iniciar-sesion" element={<PaginaInicioSesion />} />
          <Route path="/registro" element={<PaginaRegistro />} />
          <Route path="/admin" element={<h1>Panel administrativo</h1>} />
        </Routes>
      </MemoryRouter>
    </CarritoProvider>,
  );
}

async function enviarFormulario() {
  await act(() => {
    fireEvent.change(screen.getByLabelText("Correo"), { target: { value: "ana@test.cl" } });
    fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: " clave segura " } });
  });

  await act(() => {
    fireEvent.submit(screen.getByRole("button", { name: "Ingresar" }).form);
  });
}

describe("inicio de sesión", () => {
  it("usa la sesión anidada de la API para entrar al panel", async () => {
    iniciarSesion.mockResolvedValue({
      token: "jwt-de-prueba",
      usuario: { id: 1, correo: "ana@test.cl", rol: "ADMIN" },
    });

    abrirRuta();
    await enviarFormulario();

    expect(iniciarSesion).toHaveBeenCalledWith({ correo: "ana@test.cl", password: " clave segura " });
    expect(screen.getByRole("heading", { name: "Panel administrativo" })).toBeInTheDocument();
    expect(estaAutenticado()).toBe(true);
  });

  it("muestra un error cuando falta usuario en la respuesta", async () => {
    iniciarSesion.mockResolvedValue({ token: "jwt-de-prueba" });

    abrirRuta();
    await enviarFormulario();

    expect(screen.getByRole("alert")).toHaveTextContent("La API devolvió una sesión incompleta.");
    expect(estaAutenticado()).toBe(false);
  });
});

it("registra una cuenta pública, inicia sesión como cliente y permite cerrarla", async () => {
  const usuario = { nombre: "Ana", correo: "ana@test.cl", rol: "CLIENTE" };
  registrarUsuario.mockResolvedValue(usuario);
  iniciarSesion.mockResolvedValue({ token: "jwt-cliente", usuario });
  abrirRuta("/registro");

  await act(() => {
    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: " Ana " } });
    fireEvent.change(screen.getByLabelText("Correo"), { target: { value: usuario.correo } });
    fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: " clave segura " } });
  });
  await act(() => {
    fireEvent.submit(screen.getByRole("button", { name: "Crear cuenta" }).form);
  });

  expect(registrarUsuario).toHaveBeenCalledWith({
    nombre: "Ana", correo: usuario.correo, password: " clave segura ",
  });
  expect(screen.getByRole("status")).toHaveTextContent("Cuenta creada");
  expect(screen.getByLabelText("Correo")).toHaveValue(usuario.correo);
  expect(screen.getByLabelText("Contraseña")).toHaveValue("");

  await enviarFormulario();

  expect(screen.getByRole("heading", { name: "Sesión iniciada" })).toBeInTheDocument();
  expect(obtenerSesion()?.usuario).toEqual(usuario);
  expect(estaAutenticado()).toBe(false);

  await act(() => fireEvent.click(screen.getByRole("button", { name: "Cerrar sesión" })));
  expect(obtenerSesion()).toBeNull();
  expect(screen.getByRole("heading", { name: "Iniciar sesión" })).toBeInTheDocument();
});
