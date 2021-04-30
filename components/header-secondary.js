const templateSubHeaderSecondary = document.createElement('template');
templateSubHeaderSecondary.innerHTML = /*html*/`
  ${reset}
  <style>
    section {
      width: 433.33px;
      height: 520px;
    }

    img {
      width: 433.33px;
      height: 260px;
      margin-bottom: -7px;
    }

    p {
      height: 260px;
      background-color: #FF7E07;
      color: white;
      font-size: 51px;
      line-height: 50px;
      letter-spacing: -3px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p::before {
      position: absolute;
      margin-top: -280px;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 15px 20px 15px;
      border-color: transparent transparent #FF7E07 transparent;
    }

    span {
      display: block;
      width: 280px;
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