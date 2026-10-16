export function validarEmail(email) {
if (!email || email.trim() === "") {
return "El correo es obligatorio.";
}
// Validación básica de correo (debe incluir '@' y un punto)
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regex.test(email)) {
return "El formato del correo no es válido.";
}
return "";
}
export function validarClave(clave) {
if (!clave || clave.trim() === "") {
return "La contraseña es obligatoria.";
}
if (clave.length < 6) {
return "La contraseña debe tener al menos 6 caracteres.";
}
return "";
}