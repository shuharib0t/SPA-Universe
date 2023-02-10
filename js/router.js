import { Controls } from './controls.js'

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
    this.changeBackground()
  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector('#app').innerHTML = html
    })
  }

  show(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)

    this.handleUniverse()
    this.changeBackground()
  }

  handleUniverse() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const controls = new Controls()
  
    fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector('#app').innerHTML = html
      controls.universe()
    })
  }

  changeBackground() {
    const {pathname} = window.location
    const page = document.querySelector("body")
    let currentBackground

    switch (pathname) {
        case "/":
            currentBackground = "./images/mountains-universe-1.png"
            break;
        case "/universe":
            currentBackground = "./images/mountains-universe-2.png"
            break;
        case "/exploration":
            currentBackground = "./images/mountains-universe-3.png"
            break;
    }

    page.style.setProperty("background-image", `url(${currentBackground})`)
  }
}