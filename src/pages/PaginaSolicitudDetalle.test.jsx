import { act } from "react";
import { createRoot } from "react-dom/client";
import { fireEvent, screen, within } from "@testing-library/dom";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "../App";
import { guardarCita } from "../services/citasService";
import { gestionarCita } from "../services/solicitudesService";
import { listarUsuarios } from "../services/usuarioService";
import { guardarSesion } from "../utils/autenticacion";

vi.mock("../services/usuarioService", () => ({ listarUsuarios: vi.fn() }));

let contenedor;
let root;

beforeEach(() => {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  localStorage.clear();
  contenedor = document.createElement("div");
  document.body.append(contenedor);
});

afterEach(async () => {
  if (root) await act(() => root.unmount());
  root = null;
  contenedor.remove();
  vi.unstubAllGlobals();
});

function iniciarSesion(id, rol = "CLIENTE", nombre = "Ana de prueba") {
  guardarSesion({
    token: "jwt-prueba",
    usuario: { id, rol, nombre, correo: `cuenta-${id}@ejemplo.cl` },
  });
}

async function abrir(ruta) {
  if (root) await act(() => root.unmount());
  window.history.replaceState(null, "", ruta);
  root = createRoot(contenedor);
  await act(() => root.render(<App />));
}

it("reutiliza el mismo folio en el comprobante del cliente y en el panel administrativo", async () => {
  iniciarSesion(101);
  await abrir("/servicios");
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
  await abrir(rutaCliente);
  expect(screen.queryByText("contacto@ejemplo.cl")).not.toBeInTheDocument();

  iniciarSesion(201, "ADMIN");
  await abrir("/admin/solicitudes");
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
  await abrir(`/admin/solicitudes/${cita.id}`);
  await confirmarOperacion("Aprobar cita");
  expect(screen.getByText("Confirmada", { exact: true })).toBeInTheDocument();
  await confirmarOperacion("Postergar cita", "2099-12-07");
  expect(screen.getByText("2099-12-07")).toBeInTheDocument();
  expect(screen.getByText("Reprogramada", { exact: true })).toBeInTheDocument();

  await abrir("/admin/reporte");
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
  await abrir("/admin");
  verificarTotal("Solicitudes", 1);
  verificarTotal("Fichas de clientes", 0);
  verificarTotal("Usuarios", 2);
  verificarTotal("Cuentas de clientes", 1);

  iniciarSesion(101);
  await abrir(`/historial-citas/${cita.id}`);
  expect(screen.getByText("2099-12-07")).toBeInTheDocument();
  expect(screen.getByText("Reprogramada")).toBeInTheDocument();

  iniciarSesion(201, "ADMIN");
  await abrir(`/admin/solicitudes/${cita.id}`);
  await confirmarOperacion("Aprobar cita");
  await confirmarOperacion("Marcar completada");
  expect(screen.getByText("Completada", { exact: true })).toBeInTheDocument();
  await confirmarOperacion("Eliminar cita");
  expect(screen.getByRole("status")).toHaveTextContent("Cita eliminada.");
  expect(screen.queryByText(cita.id)).not.toBeInTheDocument();

  iniciarSesion(101);
  await abrir(`/historial-citas/${cita.id}`);
  expect(screen.getByText("No existe una solicitud con ese número.")).toBeInTheDocument();
});
