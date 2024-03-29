const templateFlex = document.createElement('template');
templateFlex.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div {
      display: flex
    }
  </style>
  <div>
    <slot></slot>
  </div>
`

class Flex extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateFlex.content.cloneNode(true))
  }
}

window.customElements.define('comp-flex', Flex);