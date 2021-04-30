const reset = /*html*/`
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      font-family: 'Poppins', sans-serif;
    }
  </style>
`
const template = document.createElement('template');
template.innerHTML = /*html*/`
  ${reset}
  <style>
    div {
      width: 1300px;
      margin: 0 auto;
    }
  </style>
  <div>
    <slot></slot>
  </div>
`

class Container extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('wc-container', Container);