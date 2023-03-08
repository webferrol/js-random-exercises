import { getRandom } from '../helpers/get-random'
import Confetti from 'js-confetti'
let tirada = 0
const tiradas = []
const numeroRandom = getRandom(101, 1)
const tiradaInputUsuario = document.querySelector('#aleatorio')

export function adivinelo () {
  console.log(numeroRandom)
  if (tirada === 10) return
  if (isNaN(tiradaInputUsuario.value)) return

  tiradas.push(tiradaInputUsuario.value.trim())

  // lógica
  const numero = Number(tiradaInputUsuario.value)

  if (numero === numeroRandom) {
    tirada = 10
    document.getElementById('msg_aleatorio').textContent = 'Ganaste!!!'
    const confetti = new Confetti()
    confetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
    })
    return
  } else if (numero > numeroRandom) {
    document.getElementById('msg_aleatorio').textContent = `El número es mas pequeño. Tirada ${tirada + 1}`
  } else {
    document.getElementById('msg_aleatorio').textContent = `El número es más grande. Tirada ${tirada + 1}`
  }

  document.getElementById('serie_aleatorio').textContent = tiradas.join()

  tirada++
}
