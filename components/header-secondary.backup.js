const templateSubHeaderSecondary = document.createElement('template');
templateSubHeaderSecondary.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    section {
      width: 27.0831rem;
      height: 32.5rem;
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
  </style>
  <section>
    <img />
    <p>
      <span></span>
    </p>
  </section>
`

class SubHeaderSecondary extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateSubHeaderSecondary.content.cloneNode(true))

    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('span').innerText = this.getAttribute('text');
  }
}

window.customElements.define('header-secondary', SubHeaderSecondary);