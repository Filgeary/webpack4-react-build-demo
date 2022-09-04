import Calc from './calc'
import Logger from './logger'
import imgReact from './react-logo.png'
import imgJG from './jeffrey-goines.jpg'

const calc = new Calc()
const logger = new Logger()

logger.log(calc.add(1, 2, 3, 7, 99))

const imageReact = document.createElement('img')
imageReact.src = imgReact
document.body.appendChild(imageReact)

const imageJG = document.createElement('img')
imageJG.src = imgJG
const div = document.createElement('div')
div.appendChild(imageJG)
document.body.appendChild(div)
