import { expect, it } from "vitest";
import { filtrarCriticos } from "./stock";

it.fails("demuestra la detección de una expectativa de stock incorrecta", () => {
  const productos = [{ id: 1, stock: 20 }];
  expect(filtrarCriticos(productos, 15)).toHaveLength(1);
});
