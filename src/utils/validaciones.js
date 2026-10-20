export function validarObligatorio(valor) {
  return String(valor).trim() === "" ? "Este campo es obligatorio." : "";
}

export function validarCorreo(valor) {
  const partes = valor.split("@");
  const correcto = partes.length === 2 && partes[0] !== "" && partes[1].includes(".");
  return correcto ? "" : "Ingresa un correo válido.";
}

export function validarNumero(valor, minimo) {
  const numero = Number(valor);
  if (Number.isNaN(numero)) {
    return "Ingresa un número válido.";
  }
  if (numero < minimo) {
    return `El valor mínimo es ${minimo}.`;
  }
  return "";
}