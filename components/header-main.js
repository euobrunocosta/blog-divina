const templateHeaderMain = document.createElement('template');
templateHeaderMain.innerHTML = /*html*/`
  ${reset}
  <style>
    section {
      width: 866.66px;
      height: 520px;
    }

    img {
      width: 866.66px;
      height: 520px;
      position: absolute;
    }

    div.container {
      position: absolute;
      z-index: 2;
    }

    h1 {
      padding: 45px 0 0 100px;
    }

    h1 > a {
      display: block;
      width: 85px;
      height: 63px;
      display: block;   
      background: url('../images/logo.png') no-repeat;
      background-size: 85px 63px;
      text-indent: -9999px;
      overflow: hidden;
    }

    div.info {
      padding: 0 100px;
      margin-top: 210px;
    }

    div.info > h2 {
      font-size: 36px;
      line-height: 36px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    div.info > p {
      font-size: 14px;
      line-height: 16px;
      color: white;
      text-transform: lowercase;
      font-weight: 300;
      letter-spacing: -1px;
      margin-bottom: 10px;
    }

    div.info > a {
      display: inline-block;
      border-radius: 3px;
      padding: 0 40px;
      background-color: #FF7E07;
      color: white;
      line-height: 35px;
      font-weight: 700;
      cursor: pointer;
    }
  </style>
  <section>
    <img />
    <div class="container">
      <h1>
        <a href="#">vita_place</a>
      </h1>
      <div class="info">
        <h2></h2>
        <p></p>
        <a>Saiba mais</a>
      </div>
    </div>
  </section>
`

class HeaderMain extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateHeaderMain.content.cloneNode(true))

    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('description');
    this.shadowRoot.querySelector('a').href = this.getAttribute('url');
  }
}

window.customElements.define('header-main', HeaderMain);