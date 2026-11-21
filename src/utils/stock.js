export function filtrarCriticos(items, umbral) {
  return items.filter((item) => item.stock <= umbral);
}