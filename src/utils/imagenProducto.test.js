import { describe, it, expect } from 'vitest';
import { obtenerImagenProducto } from './imagenProducto';

describe('obtenerImagenProducto', () => {
  it('retorna string vacío si no recibe imagen', () => {
    expect(obtenerImagenProducto('')).toBe('');
    expect(obtenerImagenProducto(null)).toBe('');
  });

  it('mantiene intactas las URLs externas http/https', () => {
    const url = 'https://ejemplo.com/foto.jpg';
    expect(obtenerImagenProducto(url)).toBe(url);
  });

  it('mantiene intactas las rutas absolutas que empiezan con /', () => {
    expect(obtenerImagenProducto('/assets/logo.png')).toBe('/assets/logo.png');
  });

  it('resuelve una ruta válida para archivos locales en src/assets/productos', () => {
    const resultado = obtenerImagenProducto('me001.jpg');
    expect(resultado).toContain('me001.jpg');
  });
});