import { adivinelo, generaAleatorio, mayusculasMinusculas } from './components'

export function App () {
  document.querySelector('#b_generar').addEventListener('click', generaAleatorio)
  document.querySelector('#b_aleatorio').addEventListener('click', adivinelo)
  document.querySelector('#enlace_1').addEventListener('click', mayusculasMinusculas)
}
