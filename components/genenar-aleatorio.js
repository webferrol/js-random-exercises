import { getRandom } from '../helpers/get-random'
export function generaAleatorio () {
  const output = document.createElement('strong')
  output.textContent = getRandom(11, 0)
  document.querySelector('#serie_generar').appendChild(output)
}
