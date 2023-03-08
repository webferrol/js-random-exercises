import { validarMayusculasMinusculas } from '../helpers/validar-mayusculas-minusculas'
let sw = true

function handleInput (event) {
  const value = event.target.value.trim()
  event.target.nextElementSibling.textContent = validarMayusculasMinusculas(value)
}

export function mayusculasMinusculas (event) {
  event.preventDefault()
  if (sw) {
    const liEl = event.target.parentElement

    // Creamos al contenedor padre
    const divContainer = document.createElement('div')

    // Creo un input y escucho la entrada de datos
    const inputEL = document.createElement('input')
    inputEL.setAttribute('name', 'entrada-datos')
    inputEL.addEventListener('input', handleInput)

    // Creo un strong para mensajes
    const strongEL = document.createElement('strong')
    strongEL.setAttribute('class', 'mensaje')

    // Los anido
    divContainer.append(inputEL)
    divContainer.append(strongEL)
    liEl.append(divContainer)

    // El switch (interuptor) del if para asegurme que esta operación se haga una sola vez
    sw = false
  }
}
