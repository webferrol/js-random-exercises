export function validarMayusculasMinusculas (texto) {
  if (texto === texto.toLowerCase()) return `[${texto}] está todo en minúculas`
  else if (texto === texto.toUpperCase()) return `[${texto}] está todo en mayúsculas`
  else return `[${texto}] está en mayúsculas y en minúculas`
}
