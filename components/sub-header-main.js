const templateSubHeaderMain = document.createElement('template');
templateSubHeaderMain.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    section {
      display: flex;
    }
    p {
      margin-top: 0;
      display: inline-block;
      width: 27.0831rem;
      height: 13.75rem;
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
      height: 13.75rem;
    }
  </style>
  <section>
    <p>
      <span></span>
      <span></span>
    </p>
    <img class="first" />
    <img class="second" />
  </section>
`

class SubHeaderMain extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateSubHeaderMain.content.cloneNode(true))

    this.shadowRoot.querySelector('p span:first-child').innerText = this.getAttribute('mainText');
    this.shadowRoot.querySelector('p span:last-child').innerText = this.getAttribute('secondaryText');
    this.shadowRoot.querySelector('img.first').src = this.getAttribute('firstImage');
    this.shadowRoot.querySelector('img.second').src = this.getAttribute('secondImage');
  }
}

window.customElements.define('sub-header-main', SubHeaderMain);