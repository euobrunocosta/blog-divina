const templateHeaderContainer = document.createElement('template');
templateHeaderContainer.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    header {
      background-color: #E46002;
    }

    div.container {
      display: flex;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      header {
        padding-top: 4.0625rem;
      }

      div.container {
        flex-direction: column;
      }
    }
  </style>
  <header>
    <comp-container>
      <div class="container">
        <div><slot name="primary"></slot></div>
        <div><slot name="secondary"></slot></div>
      </div>
    </comp-container>
  </header>
`

class HeaderContainer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderContainer.content.cloneNode(true))
  }
}

window.customElements.define('header-container', HeaderContainer);