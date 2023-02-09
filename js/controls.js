import {
  navHome,
  navUniverse,
  navExploration
} from './elements.js'

export class Controls {
  home() {
    navHome.classList.add('selected')
    navUniverse.classList.remove('selected')
    navExploration.classList.remove('selected')
  }
  
  universe() {
    navUniverse.classList.add('selected')
    navHome.classList.remove('selected')
    navExploration.classList.remove('selected')
  }
  
  exploration() {
    navExploration.classList.add('selected')
    navHome.classList.remove('selected')
    navUniverse.classList.remove('selected')
  }
}