import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "../App";
import { guardarCita } from "../services/citasService";
import { gestionarCita } from "../services/solicitudesService";
import { listarUsuarios } from "../services/usuarioService";
import { guardarSesion } from "../utils/autenticacion";

vi.mock("../services/usuarioService", () => ({ listarUsuarios: vi.fn() }));

beforeEach(() => localStorage.clear());

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
  vi.resetAllMocks();
});

function iniciarSesion(id, rol = "CLIENTE", nombre = "Ana de prueba") {
  guardarSesion({
    token: "jwt-prueba",
    usuario: { id, rol, nombre, correo: `cuenta-${id}@ejemplo.cl` },
  });
}

function abrir(ruta) {
  cleanup();
  window.history.replaceState(null, "", ruta);
  render(<App />);
}

it("reutiliza el mismo folio en el comprobante del cliente y en el panel administrativo", async () => {
  iniciarSesion(101);
  abrir("/servicios");
  await act(() => fireEvent.click(screen.getAllByRole("button", { name: "Reservar servicio" })[0]));

  await act(() => {
    fireEvent.change(screen.getByLabelText("Nombre de la Mascota"), { target: { value: "Firulais" } });
    fireEvent.change(screen.getByLabelText("Servicio / Motivo"), { target: { value: "Control anual" } });
    fireEvent.change(screen.getByLabelText("Fecha deseada"), { target: { value: "2099-11-22" } });
    fireEvent.change(screen.getByLabelText("Correo de contacto"), { target: { value: "contacto@ejemplo.cl" } });
  });
  await act(() => fireEvent.submit(screen.getByRole("button", { name: "Agendar Cita" }).form));

  const enlace = screen.getByRole("link", { name: "Ver comprobante" });
  const rutaCliente = enlace.getAttribute("href");
  const folio = rutaCliente.split("/").at(-1);
  await act(() => fireEvent.click(enlace));
  expect(screen.getByText(`Solicitud N° ${folio}`)).toBeInTheDocument();
  expect(screen.getByText("contacto@ejemplo.cl")).toBeInTheDocument();

  iniciarSesion(102);
  abrir(rutaCliente);
  expect(screen.queryByText("contacto@ejemplo.cl")).not.toBeInTheDocument();

  iniciarSesion(201, "ADMIN");
  abrir("/admin/solicitudes");
  const fila = screen.getByText(folio).closest("tr");
  expect(within(fila).getByText("Ana de prueba")).toBeInTheDocument();
  expect(within(fila).getByText("Consulta general")).toBeInTheDocument();
  await act(() => fireEvent.click(within(fila).getByRole("button", { name: "Ver comprobante" })));
  expect(screen.getByText(`Solicitud N° ${folio}`)).toBeInTheDocument();
  expect(screen.getByText("Firulais")).toBeInTheDocument();
});

async function confirmarOperacion(nombre, fecha) {
  await act(() => fireEvent.click(screen.getByRole("button", { name: nombre })));
  const dialogo = within(screen.getByRole("dialog"));
  if (fecha) {
    await act(() => fireEvent.change(dialogo.getByLabelText("Nueva fecha"), { target: { value: fecha } }));
  }
  await act(() => fireEvent.submit(dialogo.getByRole("button", { name: "Confirmar cambio" }).form));
}

function verificarTotal(etiqueta, total) {
  const tarjeta = screen.getByText(etiqueta, { selector: "small" }).closest(".card");
  expect(within(tarjeta).getByText(String(total))).toBeInTheDocument();
}

it("actualiza el mismo registro al aprobar, postergar, completar y eliminar una cita", async () => {
  iniciarSesion(101);
  const cita = guardarCita({ servicio: "Vacunación", fecha: "2099-12-01" }, "101");
  const datos = { usuarioId: 101, citaId: cita.id };
  expect(() => gestionarCita({ ...datos, accion: "aprobar" })).toThrow(/administrador/);

  iniciarSesion(201, "ADMIN", "Gabriela Administradora");
  expect(() => gestionarCita({ ...datos, accion: "completar" })).toThrow(/estado actual/);
  expect(() => gestionarCita({ ...datos, accion: "postergar", fecha: "2099-11-30" })).toThrow(/fecha válida/);
  expect(() => gestionarCita({ ...datos, accion: "postergar", fecha: "2099-02-30" })).toThrow(/fecha válida/);
  abrir(`/admin/solicitudes/${cita.id}`);
  await confirmarOperacion("Aprobar cita");
  expect(screen.getByText("Confirmada", { exact: true })).toBeInTheDocument();
  await confirmarOperacion("Postergar cita", "2099-12-07");
  expect(screen.getByText("2099-12-07")).toBeInTheDocument();
  expect(screen.getByText("Reprogramada", { exact: true })).toBeInTheDocument();

  abrir("/admin/reporte");
  verificarTotal("Solicitudes totales", 1);
  verificarTotal("Reprogramadas", 1);
  expect(screen.getByText("Gabriela Administradora")).toBeInTheDocument();
  expect(screen.getByText("cuenta-201@ejemplo.cl")).toBeInTheDocument();
  expect(screen.getByText("Administrador")).toBeInTheDocument();

  await act(() => {
    iniciarSesion(202, "ADMIN", "Otra administradora");
    window.dispatchEvent(new StorageEvent("storage", { key: "admin_autenticado" }));
  });
  expect(screen.getByText("Otra administradora")).toBeInTheDocument();
  expect(screen.queryByText("Gabriela Administradora")).not.toBeInTheDocument();

  listarUsuarios.mockResolvedValue([{ id: 201, rol: "ADMIN" }, { id: 101, rol: "CLIENTE" }]);
  abrir("/admin");
  verificarTotal("Solicitudes", 1);
  verificarTotal("Fichas de clientes", 0);
  await waitFor(() => verificarTotal("Usuarios", 2));
  verificarTotal("Cuentas de clientes", 1);

  iniciarSesion(101);
  abrir(`/historial-citas/${cita.id}`);
  expect(screen.getByText("2099-12-07")).toBeInTheDocument();
  expect(screen.getByText("Reprogramada")).toBeInTheDocument();

  iniciarSesion(201, "ADMIN");
  abrir(`/admin/solicitudes/${cita.id}`);
  await confirmarOperacion("Aprobar cita");
  await confirmarOperacion("Marcar completada");
  expect(screen.getByText("Completada", { exact: true })).toBeInTheDocument();
  await confirmarOperacion("Eliminar cita");
  expect(screen.getByRole("status")).toHaveTextContent("Cita eliminada.");
  expect(screen.queryByText(cita.id)).not.toBeInTheDocument();

  iniciarSesion(101);
  abrir(`/historial-citas/${cita.id}`);
  expect(screen.getByText("No existe una solicitud con ese número.")).toBeInTheDocument();
});

it.each([undefined, "CLIENTE"])("redirige una sesión sin rol administrativo (%s)", (rol) => {
  if (rol) iniciarSesion(101, rol);
  abrir("/admin/solicitudes");
  expect(window.location.pathname).toBe("/iniciar-sesion");
  expect(screen.getByRole("heading", { name: rol ? "Sesión iniciada" : "Iniciar sesión" })).toBeInTheDocument();
});

it("abre un comprobante desde Mis citas y trata los folios inexistentes", () => {
  iniciarSesion(101);
  const cita = guardarCita({ servicio: "Control anual", fecha: "2099-12-01" }, "101");
  abrir("/historial-citas");
  fireEvent.click(screen.getByRole("link", { name: "Ver comprobante" }));
  expect(window.location.pathname).toBe(`/historial-citas/${cita.id}`);
  expect(screen.getByText(`Solicitud N° ${cita.id}`)).toBeInTheDocument();

  iniciarSesion(201, "ADMIN");
  abrir("/admin/solicitudes/inexistente");
  expect(screen.getByText("No existe una solicitud con ese número.")).toBeInTheDocument();
});

it("muestra en el resumen tantos ítems críticos como productos lista el módulo", async () => {
  iniciarSesion(201, "ADMIN");
  listarUsuarios.mockResolvedValue([]);
  localStorage.setItem("productos", JSON.stringify([
    { id: 1, nombre: "Alimento A", categoria: "Alimento", stock: 5 },
    { id: 2, nombre: "Alimento B", categoria: "Alimento", stock: 8 },
    { id: 3, nombre: "Alimento C", categoria: "Alimento", stock: 20 },
  ]));
  abrir("/admin");
  await waitFor(() => verificarTotal("Usuarios", 0));
  verificarTotal("Ítems críticos", 2);
  const tarjeta = screen.getByText("Ítems críticos", { selector: "small" }).closest(".card");
  fireEvent.click(within(tarjeta).getByRole("button", { name: "Ver módulo" }));
  const filas = within(screen.getByRole("table")).getAllByRole("row").slice(1);
  expect(filas).toHaveLength(2);
  expect(filas[0]).toHaveTextContent("Alimento A");
  expect(filas[1]).toHaveTextContent("Alimento B");
});
