const templateNavHeader = document.createElement('template');
templateNavHeader.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    section {
      height: 32.5rem;
      background-color: #E46002;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }

    a.button {
      width: 1.875rem;
      height: 1.875rem;
      border: none;
      text-indent: -624.9375rem;
      overflow: hidden;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }

    a:focus {
      outline: none;
    }

    a.search {
      background-image: url('../images/icons/search.svg');
      background-size: auto 1.5rem;
      margin-top: 1.875rem;
    }

    a.menu {
      background-image: url('../images/icons/hamburgerMenu.svg');
      background-size: 1.875rem auto;
      margin-top: 11.875rem;
    }

    a.logo {
      display: none;
    }

    div.menu {
      position: fixed;
      background-color: #E46002;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 100vw;
      z-index: 2;
      padding: 1.875rem 15rem;
      transition: left 300ms ease-out;
    }

    div.menu.open {
      left: 0;
    }

    a.close {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      text-indent: -600rem;
      overflow: hidden;
      background: url('../images/icons/close.svg') no-repeat;
      background-size: 1.25rem;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      section {
        padding: 1.25rem;
        height: 4.0625rem;
        background-image: linear-gradient(180deg, #E76B00 0%, #DD4B00 100%);
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      a.logo {
        display: block;
        min-width: 4.0625rem;
        height: 3.75rem;
        background: url('../images/logo.png') no-repeat;
        background-size: auto 2.5rem;
        background-position: left center;
        text-indent: -624.9375rem;
        overflow: hidden;
      }

      a.search {
        display: none;
      }

      a.menu {
        background-image: url('../images/icons/hamburgerMenu.svg');
        background-size: 1.875rem auto;
        margin-top: 0;
      }

      div.menu {
        padding: 1.875rem 1.25rem;
      }
    }
  </style>
  <div class="menu">
    <a class="close" href="#">Fechar</a>
    <slot></slot>
  </div>
  <section>
    <a class="logo">vita_place</a>
    <a class="button search">Buscar</a>
    <a class="button menu">Menu</a>
  </section>
`

class NavHeader extends HTMLElement {
  constructor() {
    super()

    this.showMenu = false

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateNavHeader.content.cloneNode(true))
  }

  toogleShowMenu() {
    this.showMenu = !this.showMenu

    const menu = this.shadowRoot.querySelector('div.menu')

    if (this.showMenu) {
      menu.classList.add('open')
      return
    }

    menu.classList.remove('open')
  }

  connectedCallback() {
    this.shadowRoot.querySelector('section').addEventListener('click', () => this.toogleShowMenu());
    this.shadowRoot.querySelector('a.close').addEventListener('click', () => this.toogleShowMenu());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('section').removeEventListener();
    this.shadowRoot.querySelector('a.close').removeEventListener();
  }
}

window.customElements.define('nav-header', NavHeader);