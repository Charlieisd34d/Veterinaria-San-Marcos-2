import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import App from "../App";
import articulos from "../data/blog.json";
import { guardarSesion } from "../utils/autenticacion";

beforeEach(() => localStorage.clear());

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.history.replaceState(null, "", "/");
});

function abrir(ruta) {
  cleanup();
  window.history.replaceState(null, "", ruta);
  render(<App />);
}

function simularFalloDeGuardado(clave) {
  const setItem = Storage.prototype.setItem;
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (key, valor) {
    if (key === clave) throw new DOMException("Almacenamiento lleno", "QuotaExceededError");
    setItem.call(this, key, valor);
  });
}

it("permite elegir la cantidad desde el catálogo y reintentar el pedido si falla el guardado", () => {
  const producto = { id: 12, nombre: "Alimento de prueba", categoria: "Alimento", precio: 2500 };
  localStorage.setItem("productos", JSON.stringify([producto]));
  abrir("/productos");
  fireEvent.click(screen.getByRole("link", { name: "Ver detalle" }));
  fireEvent.change(screen.getByRole("spinbutton", { name: "Cantidad" }), { target: { value: "2" } });
  fireEvent.click(screen.getByRole("button", { name: "Añadir al carrito" }));

  abrir("/carrito");
  const continuar = screen.getByRole("button", { name: "Continuar al Pago" });
  simularFalloDeGuardado("solicitudes");
  fireEvent.click(continuar);
  expect(screen.getByRole("alert")).toHaveTextContent("No se pudo guardar el pedido");
  expect(screen.getByRole("heading", { name: "Carrito (2)" })).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem("carrito_san_marcos"))).toEqual([
    expect.objectContaining({ id: 12, cantidad: 2 }),
  ]);

  vi.restoreAllMocks();
  fireEvent.click(continuar);
  expect(screen.getByRole("heading", { name: "¡Pedido confirmado!" })).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem("carrito_san_marcos"))).toEqual([]);
  expect(JSON.parse(localStorage.getItem("solicitudes"))).toContainEqual(
    expect.objectContaining({ total: 5000, estado: "Pendiente" }),
  );

  guardarSesion({ token: "jwt-prueba", usuario: { rol: "ADMIN" } });
  abrir("/admin/solicitudes");
  const fila = screen.getByText("Pedido Tienda: Alimento de prueba (x2)").closest("tr");
  fireEvent.click(within(fila).getByRole("button", { name: "Ver comprobante" }));
  expect(screen.getByText("Pedido Tienda: Alimento de prueba (x2)")).toBeInTheDocument();
});

it("ofrece volver al catálogo cuando el identificador de producto es desconocido", () => {
  abrir("/producto/inexistente");
  expect(screen.getByRole("heading", { name: "Producto no encontrado" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Volver al catálogo" }));
  expect(screen.getByRole("heading", { name: "Nuestros Productos" })).toBeInTheDocument();
});

it("abre el contenido del artículo seleccionado y permite cerrarlo", () => {
  abrir("/blog");
  const articulo = articulos[0];
  const tarjeta = screen.getByRole("heading", { name: articulo.titulo }).closest(".card");
  fireEvent.click(within(tarjeta).getByRole("button", { name: "Leer artículo" }));
  const dialogo = within(screen.getByRole("dialog"));
  expect(dialogo.getByRole("heading", { name: articulo.titulo })).toBeInTheDocument();
  expect(dialogo.getByText(articulo.contenido[0])).toBeInTheDocument();
  fireEvent.click(dialogo.getAllByRole("button", { name: "Cerrar" })[0]);
  expect(screen.queryByRole("dialog")).toBeNull();
});

it("conserva los campos de contacto al fallar y confirma solo tras guardar", () => {
  abrir("/contacto");
  const datos = {
    Nombre: "Ana",
    Correo: "ana@ejemplo.cl",
    Motivo: "Consulta general",
    Mensaje: "Quisiera conocer el horario.",
  };
  for (const [etiqueta, value] of Object.entries(datos)) {
    fireEvent.change(screen.getByLabelText(etiqueta), { target: { value } });
  }
  const enviar = screen.getByRole("button", { name: "Enviar mensaje" });
  simularFalloDeGuardado("mensajes_contacto_veterinaria");
  fireEvent.click(enviar);
  expect(screen.getByRole("alert")).toHaveTextContent("No se pudo guardar tu mensaje");
  for (const [etiqueta, valor] of Object.entries(datos)) {
    expect(screen.getByLabelText(etiqueta)).toHaveValue(valor);
  }

  vi.restoreAllMocks();
  fireEvent.click(enviar);
  expect(screen.getByText("Tu mensaje se guardó en este navegador.")).toBeInTheDocument();
  expect(screen.getByLabelText("Mensaje")).toHaveValue("");
  expect(JSON.parse(localStorage.getItem("mensajes_contacto_veterinaria"))).toEqual([
    expect.objectContaining({ correo: datos.Correo, mensaje: datos.Mensaje }),
  ]);
});
