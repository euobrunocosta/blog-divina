const templateSliderPost = document.createElement('template');
templateSliderPost.innerHTML = /*html*/`
  ${reset}
  <style>
    div.container {
      display: flex;
      padding: 0 150px;
    }

    div.first a {
      color: #FFA80C;
    }

    div.second a {
      color: #CC2E5A;
      align-self: flex-end;
    }

    div.third a {
      color: #6A52B8;
    }

    div.info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
    }

    img {
      width: 507px;
      height: 400px;
      margin-right: 30px;
    }

    div.second img {
      order: 2;
      margin-right: 0;
    }

    div.second div.info {
      order: 1;
      text-align: right;
      margin-right: 30px;
      display: flex;
      align-items: right;
    }

    h2 {
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 15px;
    }

    p {
      line-height: 22px;
      margin-bottom: 25px;
    }

    a {
      width: max-content;
      border-radius: 3px;
      padding: 0 40px;
      background-color: white;
      line-height: 35px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
    }
  </style>
  <div class="container">
    <img />
    <div class="info">
      <h2></h2>
      <p></p>
      <a>Saiba mais</a>
    </div>
  </div>
`

class SliderPost extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.htmlClasses = [
      'first',
      'second',
      'third'
    ]

    this.index = this.getAttribute('index')

    this.shadowRoot.appendChild(templateSliderPost.content.cloneNode(true))
    this.shadowRoot.querySelector('div.container').classList.add(this.htmlClasses[this.index])
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('title');
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('text');
    this.shadowRoot.querySelector('a').href = this.getAttribute('url');
  }
}

window.customElements.define('slider-post', SliderPost);