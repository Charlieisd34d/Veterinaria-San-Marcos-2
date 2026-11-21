export function validarObligatorio(valor) {
  const texto = String(valor ?? "").trim();
  return texto ? "" : "Este campo es obligatorio.";
}

export function validarCorreo(valor) {
  const texto = String(valor ?? "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto) ? "" : "Ingresa un correo válido.";
}

export function validarNumero(valor, minimo = 0) {
  const numero = Number(valor);
  if (Number.isNaN(numero)) {
    return "Debe ser un número válido.";
  }
  return numero >= minimo ? "" : `El valor debe ser mayor o igual a ${minimo}.`;
}
