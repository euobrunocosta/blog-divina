const templateSliderPost = document.createElement('template');
templateSliderPost.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.container {
      width: ${breakPoint}rem;
      display: flex;
      padding: 0 9.375rem;
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
      width: 25rem;
      margin-right: 1.875rem;
    }

    div.second img {
      order: 2;
      margin-right: 0;
    }

    div.second div.info {
      order: 1;
      text-align: right;
      margin-right: 1.875rem;
      display: flex;
      align-items: right;
    }

    h2 {
      font-size: 1.875rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.9375rem;
    }

    p {
      line-height: 1.375rem;
      margin-bottom: 1.5625rem;
    }

    a {
      width: max-content;
      border-radius: 0.1875rem;
      padding: 0 2.5rem;
      background-color: white;
      line-height: 2.1875rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.container {
        width: 100vw;
        flex-direction: column;
        padding: 0 1.875rem;
      }

      div.container.second {
        flex-direction: column-reverse;
      }

      img {
        width: 100%;
        margin: 0;
        margin-bottom: 1.875rem;
      }

      div.container.second div.info {
        text-align: unset;
        margin: 0;
      }

      div.container.second a {
        align-self: unset;
      }

      a {
        width: unset;
        text-align: center;
      }
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