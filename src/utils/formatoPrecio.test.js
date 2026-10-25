import { describe, expect, it } from 'vitest';
import { formatearPrecio } from './formatoPrecio';

describe('formatoPrecio', () => {
  it('formatea en pesos chilenos', () => {
    const valor = formatearPrecio(15000);

    expect(valor).toMatch(/\$\s*15\.000|\$15\.000|15\.000/);
  });
});
