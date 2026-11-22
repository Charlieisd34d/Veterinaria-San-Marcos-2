export function crearLoginDto({ correo, password }) {
  return { correo: correo.trim(), password };
}

export function crearActualizacionUsuarioDto({ nombre, correo }) {
  return { nombre: nombre.trim(), correo: correo.trim() };
}

export function crearRegistroUsuarioDto(valores) {
  return { ...crearActualizacionUsuarioDto(valores), password: valores.password };
}
