export function validarObligatorio(valor) {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/backup/admin-fix-24-10-2026
