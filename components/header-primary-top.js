const templateHeaderPrimaryTop = document.createElement('template');
templateHeaderPrimaryTop.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    img {
      width: 54.1662rem;
      height: 32.5rem;
    }

    h1 {
      position: absolute;
      margin: 2.8125rem 0 0 6.25rem;
      z-index: 1;
    }

    h1 > a {
      display: block;
      width: 5.3125rem;
      height: 3.9375rem;
      display: block;   
      background: url('./images/logo.png') no-repeat;
      background-size: 5.3125rem 3.9375rem;
      text-indent: -624.9375rem;
      overflow: hidden;
    }

    div.info {
      width: 54.1662rem;
      height: 32.5rem;
      position: absolute;
      margin-top: -32.9375rem;
      padding: 20rem 6.25rem 0 6.25rem;
      background: url('./images/shadow.png') no-repeat;
    }

    div.info > h2 {
      font-size: 2.25rem;
      line-height: 2.25rem;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin-bottom: 0.1875rem;
    }

    div.info > p {
      font-size: 0.875rem;
      line-height: 1rem;
      color: white;
      text-transform: lowercase;
      font-weight: 300;
      letter-spacing: -0.0625rem;
      margin-bottom: 0.625rem;
    }

    div.info > a {
      display: inline-block;
      border-radius: 0.1875rem;
      padding: 0 2.5rem;
      background-color: #FF7E07;
      color: white;
      line-height: 2.1875rem;
      font-weight: 700;
      cursor: pointer;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      img {
        width: 100vw;
        height: calc(100vh - 4.0625rem);
        object-fit: cover;
      }

      h1 {
        display: none;
      }

      div.info {
        width: 100vw;
        height: calc(100vh - 4.0625rem);
        margin-top: calc(calc(100vh - 3.625rem) * -1);
        padding: 50vh 1.875rem 0 1.875rem;
        text-align: center;
      }
    }
  </style>
  <div class="container">
    <h1>
      <a href="#">vita_place</a>
    </h1>
    <img />
    <div class="info">
      <h2></h2>
      <p></p>
      <a>Saiba mais</a>
    </div>
  </div>
`

class HeaderPrimaryTop extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderPrimaryTop.content.cloneNode(true))

    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('a').src = this.getAttribute('url');
  }
}

window.customElements.define('header-primary-top', HeaderPrimaryTop);