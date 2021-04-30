const templateSubHeaderMain = document.createElement('template');
templateSubHeaderMain.innerHTML = /*html*/`
  ${reset}
  <style>
    section {
      display: flex;
    }
    p {
      margin-top: 0;
      display: inline-block;
      width: 433.33px;
      height: 220px;
      background-color: #FF7E07;
      color: white;
      font-size: 51px;
      line-height: 50px;
      letter-spacing: -3px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p::before {
      position: absolute;
      margin-left: 435px;
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px 0 15px 20px;
      border-color: transparent transparent transparent #ff7f07;
      z-index: 1;
    }

    p > span:last-child {
      font-size: 18px;
      line-height: 20px;
      color: white;
      text-transform: lowercase;
      font-weight: 300;
      letter-spacing: -1px;
      margin-bottom: 10px;
    }

    p > span {
      display: block;
      width: 260px;
    }

    img {
      width: 433.33px;
      height: 220px;
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