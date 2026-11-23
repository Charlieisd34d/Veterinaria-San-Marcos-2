export function excluirRegistrosIniciales(registros, iniciales) {
  return registros.filter((registro) => !iniciales.some((inicial) =>
    Object.keys(inicial).length === Object.keys(registro).length &&
    Object.entries(inicial).every(([campo, valor]) => registro[campo] === valor)
  ));
}
