const templateHeaderPrimaryBottom = document.createElement('template');
templateHeaderPrimaryBottom.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.container {
      display: flex;
    }

    p {
      margin-top: 0;
      display: inline-block;
      width: 27.0831rem;
      height: 16.25rem;
      background-color: #FF7E07;
      color: white;
      font-size: 3.1875rem;
      line-height: 3.125rem;
      letter-spacing: -0.1875rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p::before {
      position: absolute;
      margin-left: 27.1875rem;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0.9375rem 0 0.9375rem 1.25rem;
      border-color: transparent transparent transparent #ff7f07;
      z-index: 1;
    }

    p > span:last-child {
      font-size: 1.125rem;
      line-height: 1.25rem;
      color: white;
      text-transform: lowercase;
      font-weight: 300;
      letter-spacing: -0.0625rem;
      margin-bottom: 0.625rem;
    }

    p > span {
      display: block;
      width: 16.25rem;
    }

    img {
      width: 27.0831rem;
      height: 16.25rem;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.container {
        flex-direction: column;
        margin-top: -0.625rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      p {
        width: 100%;
        padding: 1.875rem;
      }

      p::before {
        margin: 0;
        margin-top: 17.4375rem;
        transform: rotate(90deg);
      }

      p > span {
        width: 100%;
      }
    }
  </style>
  <div class="container">
    <p>
      <span></span>
      <span></span>
    </p>
    <img />
  </div>
`

class HeaderPrimaryBottom extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderPrimaryBottom.content.cloneNode(true))

    this.shadowRoot.querySelector('span:first-child').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('span:last-child').innerText = this.getAttribute('text');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
  }
}

window.customElements.define('header-primary-bottom', HeaderPrimaryBottom);