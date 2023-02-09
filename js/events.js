import { Controls } from './controls.js'
import {
  navHome,
  navUniverse,
  navExploration
} from './elements.js'

const controls = new Controls()

navHome.addEventListener('click', () => {
  controls.home()
})

navUniverse.addEventListener('click', () => {
  controls.universe()
})

navExploration.addEventListener('click', () => {
  controls.exploration()
})