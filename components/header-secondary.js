const templateHeaderSecondary = document.createElement('template');
templateHeaderSecondary.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.container {
      width: 27.0831rem;
    }

    img {
      width: 27.0831rem;
      height: 16.25rem;
      margin-bottom: -0.4375rem;
    }

    p {
      height: 16.25rem;
      background-color: #FF7E07;
      color: white;
      font-size: 3.1875rem;
      line-height: 3.125rem;
      letter-spacing: -0.1875rem;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p::before {
      position: absolute;
      margin-top: -17.5rem;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0.9375rem 1.25rem 0.9375rem;
      border-color: transparent transparent #FF7E07 transparent;
    }

    span {
      display: block;
      width: 17.5rem;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.container {
        width: 100%;
      }

      img {
        width: 100%;
        height: auto;
      }

      span {
        width: 100%;
        padding: 1.875rem;
      }
    }
  </style>
  <div class="container">
    <img />
    <p>
      <span></span>
    </p>
    <img />
  </div>
`

class HeaderSecondary extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderSecondary.content.cloneNode(true))

    this.shadowRoot.querySelector('span').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('img:first-child').src = this.getAttribute('image1');
    this.shadowRoot.querySelector('img:last-child').src = this.getAttribute('image2');
  }

  connectedCallback() {
    
  }

  disconnectedCallback() {
    
  }
}

window.customElements.define('header-secondary', HeaderSecondary);