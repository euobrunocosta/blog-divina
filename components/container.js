const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
    ${globalStyle}

    div {
      max-width: ${breakPoint}rem;
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

window.customElements.define('comp-container', Container);