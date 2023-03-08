export function esPalindromo (texto) {
  texto = texto.toLowerCase().replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const inversa = texto.split('').reverse().join('')
  return texto === inversa
}
