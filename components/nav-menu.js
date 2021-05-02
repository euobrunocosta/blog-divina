const templateNavMenu = document.createElement('template');
templateNavMenu.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.container {
      padding: 1.875rem;
    }

    div.wrapper {
      max-width: 45rem;
      margin-left: calc(50% - 22.5rem);
    }

    form {
      position: relative;
      display: flex;
      margin-bottom: 1.875rem;
    }

    input {
      border: 0.125rem solid white;
      border-radius: 0.3125rem;
      background-color: transparent;
      color: white;
      width: 100%;
      line-height: 1.875rem;
      padding: 0 0.9375rem;
      flex: 1;
    }

    input::placeholder {
      color: white;
    }

    button {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      text-indent: -624.9375rem;
      overflow: hidden;
      background: transparent url('../images/icons/search.svg') no-repeat;
      background-size: 1.25rem 1.25rem;
      right: 0.9375rem;
      top: 0.375rem;
      cursor: pointer;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      text-align: center;
      margin-bottom: 1.875rem;
    }

    ul {
      list-style: none;
    }

    ul li {
      margin-bottom: 0.125rem;
    }

    ul li a {
      display: block;
      line-height: 2.5rem;
      background-color: rgba(255, 255, 255, 0.2);
      text-transform: uppercase;
      color: white;
      text-decoration: none;
      text-align: center;
    }

    a.categorias-toggle::after {
        position: relative;
        content: "";
        display: inline-block;
        width: 0.25rem;
        height: 0.25rem;
        border-right: 0.125rem solid white;
        border-top: 0.125rem solid white;
        transform: rotate(135deg);
        margin-left: 0.625rem;
        margin-bottom: 0.25rem;
        transition: transform 150ms ease-out;
    }

    a.categorias-toggle.open::after {
      transform: rotate(-45deg);
      margin-bottom: 0.125rem;
    }

    div.categorias {
      height: 0;
      overflow: hidden;
      transition: height 150ms ease-out;
    }

    div.categorias li a {
      background-color: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    div.categorias.open {
      height: calc(2.625rem * 3);
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.wrapper {
        width: 100%;
        max-width: unset;
        margin-left: 0;
      }
    }
  </style>
  <div class="container">
    <div class="wrapper">
      <form action="">
        <input type="text" placeholder="Pesquisa" />
        <button type="submit">Buscar</button>
      </form>
      <h3>Menu</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#" class="categorias-toggle">Categorias</a></li>
        <div class="categorias">
          <li><a href="#">Saúde</a></li>
          <li><a href="#">Bem estar</a></li>
          <li><a href="#">Alimentação</a></li>
        </div>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
  </div>
`

class NavMenu extends HTMLElement {
  constructor() {
    super()

    this.showCategorias = false

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateNavMenu.content.cloneNode(true))
  }

  toogleShowCategorias() {
    this.showCategorias = !this.showCategorias

    const categorias = this.shadowRoot.querySelector('div.categorias')
    const toggle = this.shadowRoot.querySelector('a.categorias-toggle')

    if (this.showCategorias) {
      categorias.classList.add('open')
      toggle.classList.add('open')
      return
    }

    categorias.classList.remove('open')
    toggle.classList.remove('open')
  }

  connectedCallback() {
    this.shadowRoot.querySelector('a.categorias-toggle').addEventListener('click', () => this.toogleShowCategorias());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('a.categorias-toggle').removeEventListener();
  }
}

window.customElements.define('nav-menu', NavMenu);