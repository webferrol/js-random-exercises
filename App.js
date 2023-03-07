import { adivinelo } from './components/adivinelo'
import { generaAleatorio } from './components/genenar-aleatorio'



let sw = true

function mayusculasMinusculas (event) {
  event.preventDefault()

  // const papi = document.querySelector('#enlace_1').parentElement
  if (sw) {
    const liEl = event.target.parentElement

    const divContainer = document.createElement('div')
    divContainer.innerHTML = '<input id="myInput" type="text" name="input" >'

    liEl.append(divContainer)
    sw = false
  }

  


  // if (texto === texto.toLowerCase())
  //   console.log('Todo minúsculas')
  // else if (texto === texto.toUpperCase())
  //   console.log('Todo mayuscuas')
  // else
  //   console.log('De todo un poco')

 
  
} 

export function App () { 
  document.querySelector('#b_generar').addEventListener('click',generaAleatorio)
  document.querySelector("#b_aleatorio").addEventListener('click',adivinelo)
  document.querySelector('#enlace_1').addEventListener('click', mayusculasMinusculas)
}
