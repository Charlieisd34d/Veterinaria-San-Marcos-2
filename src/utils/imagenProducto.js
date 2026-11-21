export function obtenerImagenProducto(imagen) {
  if (!imagen) return '';
  if (imagen.startsWith('http') || imagen.startsWith('/') || imagen.startsWith('data:')) {
    return imagen;
  }
  return new URL(`../assets/productos/${imagen}`, import.meta.url).href;
}

export default obtenerImagenProducto;