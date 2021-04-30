const templateHeaderMenu = document.createElement('template');
templateHeaderMenu.innerHTML = /*html*/`
  ${reset}
  <style>
    section {
      position: absolute;
      right: 0;
      width: 65px;
      height: 520px;
      background-color: #E46002;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }

    a.button {
      width: 30px;
      height: 30px;
      border: none;
      text-indent: -9999px;
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
      background-size: auto 24px;
      margin-top: 30px;
    }

    a.menu {
      background-image: url('../images/icons/hamburgerMenu.svg');
      background-size: 30px auto;
      margin-top: 190px;
    }

    nav {
      position: fixed;
      background-color: #E46002;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 100vw;
      z-index: 2;
      padding: 30px;
      transition: all 300ms ease-out;
    }

    nav.open {
      left: 0;
    }

    nav div.container {
      max-width: 500px;
      margin: 0 auto;
    }

    nav a.close {
      display: block;
      width: 20px;
      height: 20px;
      text-indent: -9999px;
      overflow: hidden;
      background: url('../images/icons/close.svg') no-repeat;
      background-size: 20px;
      padding: 20px 0;
      margin-left: -100px;
    }

    form {
      position: relative;
      display: flex;
      margin-bottom: 30px;
    }

    input {
      border: 2px solid white;
      border-radius: 5px;
      background-color: transparent;
      color: white;
      width: 100%;
      line-height: 30px;
      padding: 0 15px;
      flex: 1;
    }

    input::placeholder {
      color: white;
    }

    button {
      position: absolute;
      width: 20px;
      height: 20px;
      border: none;
      text-indent: -9999px;
      overflow: hidden;
      background: transparent url('../images/icons/search.svg') no-repeat;
      background-size: 20px 20px;
      right: 15px;
      top: 6px;
      cursor: pointer;
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      text-align: center;
      margin-bottom: 30px;
    }

    ul {
      list-style: none;
    }

    ul li {
      margin-bottom: 2px;
    }

    ul li a {
      display: block;
      line-height: 40px;
      background-color: rgba(255, 255, 255, 0.2);
      text-transform: uppercase;
      color: white;
      text-decoration: none;
      text-align: center;
    }

    div.categorias li {
      display: none;
    }

    div.categorias li a {
      background-color: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    div.categorias.open li {
      display: block;
    }
  </style>
  <nav>
    <div class="container">
      <a class="close" href="#">Fechar</a>
      <form action="">
        <input type="text" placeholder="Pesquisa" />
        <button type="submit">Buscar</button>
      </form>
      <h3>Menu</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#" class="categoriasToggle">Categorias</a></li>
        <div class="categorias">
          <li><a href="#">Saúde</a></li>
          <li><a href="#">Bem estar</a></li>
          <li><a href="#">Alimentação</a></li>
        </div>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
  </nav>
  <section>
    <a class="button menuToggle search">Buscar</a>
    <a class="button menuToggle menu">Menu</a>
  </section>
`

class HeaderMenu extends HTMLElement {
  constructor() {
    super()

    this.showMenu = false
    this.showCategorias = false

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderMenu.content.cloneNode(true))
  }

  toogleShowMenu() {
    this.showMenu = !this.showMenu

    const menu = this.shadowRoot.querySelector('nav')

    if (this.showMenu) {
      menu.classList.add('open')
      return
    }

    menu.classList.remove('open')
  }

  toogleShowCategorias() {
    this.showCategorias = !this.showCategorias

    const categorias = this.shadowRoot.querySelector('div.categorias')

    if(this.showCategorias) {
      categorias.classList.add('open')
      return
    }

    categorias.classList.remove('open')
  }

  connectedCallback() {
    this.shadowRoot.querySelector('a.categoriasToggle').addEventListener('click', () => this.toogleShowCategorias());
    this.shadowRoot.querySelector('section').addEventListener('click', () => this.toogleShowMenu());
    this.shadowRoot.querySelector('a.close').addEventListener('click', () => this.toogleShowMenu());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('a.categoriasToggle').removeEventListener();
    this.shadowRoot.querySelector('section').removeEventListener();
    this.shadowRoot.querySelector('a.close').removeEventListener();
  }
}

window.customElements.define('header-menu', HeaderMenu);