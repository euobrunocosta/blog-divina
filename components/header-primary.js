const templateHeaderPrimary = document.createElement('template');
templateHeaderPrimary.innerHTML = /*html*/`
  <style>
    ${globalStyle}

    section {
      width: 42.6662rem;
    }

    div.top {
      width: 42.6662rem;
      height: 25.625rem;
    }
    
    div.bottom {
      width: 42.6662rem;
      height: 12.8125rem;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      section, div.top, div.bottom {
        width: 100%;
        height: auto;
      }
    }
  </style>
  <section>
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </section>
`

class HeaderPrimary extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderPrimary.content.cloneNode(true))
  }
}

window.customElements.define('header-primary', HeaderPrimary);