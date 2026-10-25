import { describe, expect, it } from 'vitest';
import { validarObligatorio, validarCorreo, validarNumero } from './validaciones';

describe('validaciones', () => {
  it('rechaza un campo obligatorio vacío', () => {
    expect(validarObligatorio('')).toBe('Este campo es obligatorio.');
  });

  it('acepta un campo obligatorio con texto', () => {
    expect(validarObligatorio('Ana')).toBe('');
  });

  it('valida un correo correcto', () => {
    expect(validarCorreo('ana@veterinaria.cl')).toBe('');
  });

  it('rechaza un correo inválido', () => {
    expect(validarCorreo('correo-no-valido')).toBe('Ingresa un correo válido.');
  });

  it('valida un número válido mayor o igual al mínimo', () => {
    expect(validarNumero(10, 5)).toBe('');
  });

  it('rechaza número menor que el mínimo', () => {
    expect(validarNumero(3, 5)).toBe('El valor debe ser mayor o igual a 5.');
  });
});
