const templateSliderContainer = document.createElement('template');
templateSliderContainer.innerHTML = /*html*/`
  ${reset}
  <style>
    div.container {
      min-width: 1300px;
    }

    div.container.first {
      background-image: url('../images/orangeV.svg'), linear-gradient(180deg, #FFA80C 50%, #FF7807 100%);
      background-position: calc(50% + 530px), left;
      background-size: auto 530px;
      background-repeat: no-repeat;
    }

    div.container.second {
      background-image: url('../images/greenV.svg'), linear-gradient(180deg, #CC2E5A 50%, #B01A44 100%);
      background-position: calc(50% - 530px), left;
      background-size: auto 530px;
      background-repeat: no-repeat;
    }

    div.container.third {
      background-image: url('../images/orangeV.svg'), linear-gradient(180deg, #6A52B8 50%, #4E3E9D 100%);
      background-position: calc(50% + 530px), left;
      background-size: auto 530px;
      background-repeat: no-repeat;
    }

    div.carousel {
      height: 530px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div.carousel.first {
      background-image: url('../images/noticia.png');
      background-position: 20px center;
      background-size: auto 490px;
      background-repeat: no-repeat;
    }

    div.carousel.second {
      background: url('../images/informacao.png');
      background-position: right 20px center;
      background-size: auto 490px;
      background-repeat: no-repeat;
    }

    div.carousel.third {
      background: url('../images/saude.png');
      background-position: 20px center;
      background-repeat: no-repeat;
      background-size: auto 490px;
    }

    div.nav {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-top: 30px;
    }

    a.arrow {
      height: 3px;
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      text-indent: -9999px;
      overflow: hidden;
    }

    a.proxima {
      transform: rotate(-45deg);
      margin-left: 30px;
    }

    a.anterior {
      transform: rotate(135deg);
      margin-right: 50px;
    }

    a.bullet {
      display: inline-block;
      background-color: white;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      text-indent: -9999px;
      overflow: hidden;
      align-self: center;
      margin-right: 20px;
      opacity: 0.5;
    }

    a.bullet.ativo {
      opacity: 1;
    }
  </style>
  <div class="container">
    <wc-container>
      <div class="carousel">
        <slot></slot>
        <div class="nav">
          <a href="#" class="arrow anterior">Anterior</a>
          <a href="#" class="bullet ativo">1</a>
          <a href="#" class="bullet">2</a>
          <a href="#" class="bullet">3</a>
          <a href="#" class="arrow proxima">Próxima</a>
        </div>
      </div>
    </wc-container>
  </div>
`

class SliderContainer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.htmlClasses = [
      'first',
      'second',
      'third'
    ]

    this.index = this.getAttribute('index')

    this.shadowRoot.appendChild(templateSliderContainer.content.cloneNode(true))
    
    this.shadowRoot.querySelector('div.container').classList.add(this.htmlClasses[this.index]);
    this.shadowRoot.querySelector('div.carousel').classList.add(this.htmlClasses[this.index])
  }
}

window.customElements.define('slider-container', SliderContainer);