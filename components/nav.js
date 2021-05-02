const templateNav = document.createElement('template');
templateNav.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    nav {
      position: fixed;
      right: 0;
      width: 4.0625rem;
      z-index: 2;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      nav {
        width: 100%;
        right: unset;
      }
    }
  </style>
  <nav>
    <nav-header>
      <slot></slot>
    </nav-header>
    <nav-social></nav-social>
  </nav>
`

class Nav extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.appendChild(templateNav.content.cloneNode(true))
  }
}

window.customElements.define('comp-nav', Nav);