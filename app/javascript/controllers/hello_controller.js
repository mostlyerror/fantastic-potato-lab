import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['list']

  connect() {
  	console.log('connect()')
  }
  addHelloWorld() {
	const listEl = this.listTarget
	let itemEl = document.createElement('li')
	itemEl.innerHTML = "Hello World from Stimulus controller"
	listEl.appendChild(itemEl)
  }
}

// export default class extends Controller {
//   static targets = [ "list" ]
//
//   addHelloWorld() {
//     const listEl = this.listTarget
//     var itemEl = document.createElement("li");
//     itemEl.innerHTML = "Hello World from a Stimulus controller!";
//     listEl.appendChild(itemEl);
//   }
// }
