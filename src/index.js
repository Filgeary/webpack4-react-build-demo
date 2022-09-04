import Calc from './calc'
import Logger from './logger'
import img from './react-logo.png'

const calc = new Calc()
const logger = new Logger()

logger.log(calc.add(1, 2, 3, 7, 99))

const image = document.createElement('img')
image.src = img
document.body.appendChild(image)
