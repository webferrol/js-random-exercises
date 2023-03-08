import { esPalindromo } from '../helpers/esPalindromo'

export default function (ev) {
  ev.preventDefault()
  const texto = window.prompt('Introduce un texto')
  if (texto === null || texto === '' || texto === Number(texto)) return
  if (esPalindromo(texto)) {
    window.alert('Es palíndromo')
  } else {
    window.alert('No es palíndromo')
  }
}
