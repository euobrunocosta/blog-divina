const templateSliderContainer = document.createElement('template');
templateSliderContainer.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.container.first {
      background-image: url('./images/orangeV.svg'), linear-gradient(180deg, #FFA80C 50%, #FF7807 100%);
      background-position: calc(50% + 33.125rem), left;
      background-size: auto 33.125rem, auto;
      background-repeat: no-repeat;
    }

    div.container.second {
      background-image: url('./images/greenV.svg'), linear-gradient(180deg, #CC2E5A 50%, #B01A44 100%);
      background-position: calc(50% - 33.125rem), left;
      background-size: auto 33.125rem, auto;
      background-repeat: no-repeat;
    }

    div.container.third {
      background-image: url('./images/orangeV.svg'), linear-gradient(180deg, #6A52B8 50%, #4E3E9D 100%);
      background-position: calc(50% + 33.125rem), left;
      background-size: auto 33.125rem, auto;
      background-repeat: no-repeat;
    }

    div.carousel {
      height: 33.125rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    div.carousel.first {
      background-image: url('./images/noticia.png');
      background-position: 1.25rem center;
      background-size: auto 30.625rem;
      background-repeat: no-repeat;
    }

    div.carousel.second {
      background: url('./images/informacao.png');
      background-position: right 1.25rem center;
      background-size: auto 30.625rem;
      background-repeat: no-repeat;
    }

    div.carousel.third {
      background: url('./images/saude.png');
      background-position: 1.25rem center;
      background-repeat: no-repeat;
      background-size: auto 30.625rem;
    }

    div.outterWrapper {
      width: ${breakPoint}rem;
      overflow: hidden;
    }

    div.innerWrapper {
      display: flex;
      transition: all 500ms ease-out;
    }

    div.nav {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-top: 1.875rem;
    }

    a.arrow {
      height: 0.1875rem;
      border: solid white;
      border-width: 0 0.1875rem 0.1875rem 0;
      display: inline-block;
      padding: 0.1875rem;
      text-indent: -624.9375rem;
      overflow: hidden;
    }

    a.next {
      transform: rotate(-45deg);
      margin-left: 1.875rem;
    }

    a.previous {
      transform: rotate(135deg);
      margin-right: 3.125rem;
    }

    a.bullet {
      display: inline-block;
      background-color: white;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      text-indent: -624.9375rem;
      overflow: hidden;
      align-self: center;
      margin-right: 1.25rem;
      opacity: 0.5;
    }

    a.bullet.active {
      opacity: 1;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.container {
        padding: 4.375rem 0;
      }

      div.carousel {
        height: unset;
      }

      div.carousel.first, div.carousel.second, div.carousel.third {
        background-image: unset;
      }

      div.container.first {
        background-position: -50% bottom, left;
        background-size: auto 75%, auto;
      }

      div.container.second {
        background-position: 150% bottom, left;
        background-size: auto 75%, auto;
      }

      div.container.third {
        background-position: -50% bottom, left;
        background-size: auto 75%, auto;
      }

      div.outterWrapper {
        width: unset;
      }
    }
  </style>
  <div class="container">
    <comp-container>
      <div class="carousel">
        <div class="outterWrapper">
          <div class="innerWrapper">
            <slot>
          </div>
        </div>
        <div class="nav">
          <a href="#" class="arrow previous">Anterior</a>
          <a href="#" class="bullet first active">1</a>
          <a href="#" class="bullet second">2</a>
          <a href="#" class="bullet third">3</a>
          <a href="#" class="arrow next">Próxima</a>
        </div>
      </div>
    </comp-container>
  </div>
`

class SliderContainer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.current = 0

    this.desktopWidth = this.getDesktopWidth()

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

  getDesktopWidth() {
    return window.innerWidth < breakPointPX
      ? window.innerWidth
      : breakPointPX
  }

  slideToNext() {
    this.current = this.current === 2 ? 0 : (this.current + 1)
    this.slideToPosition(this.current)
  }

  slideToPrevious() {
    this.current = this.current === 0 ? 2 : (this.current - 1)
    this.slideToPosition(this.current)
  }

  slideToPosition(position) {
    this.current = position
    const margin = position * this.desktopWidth * -1
    this.shadowRoot.querySelector('div.innerWrapper').style.marginLeft = `${margin}px`
    this.activateBullet(position)
  }

  activateBullet(position) {
    const bullets = this.shadowRoot.querySelectorAll('a.bullet')
    bullets.forEach((bullet, index) => {
      if (index === position) {
        bullet.classList.add('active')
        return
      }
      bullet.classList.remove('active')
    })
  }

  updateDesktopWidth() {
    this.desktopWidth = this.getDesktopWidth()
  }

  connectedCallback() {
    this.shadowRoot.querySelector('a.bullet.first').addEventListener('click', (e) => {
      e.preventDefault()
      this.slideToPosition(0)
    });

    this.shadowRoot.querySelector('a.bullet.second').addEventListener('click', (e) => {
      e.preventDefault()
      this.slideToPosition(1)
    });

    this.shadowRoot.querySelector('a.bullet.third').addEventListener('click', (e) => {
      e.preventDefault()
      this.slideToPosition(2)
    });

    this.shadowRoot.querySelector('a.arrow.previous').addEventListener('click', (e) => {
      e.preventDefault()
      this.slideToPrevious()
    });

    this.shadowRoot.querySelector('a.arrow.next').addEventListener('click', (e) => {
      e.preventDefault()
      this.slideToNext()
    });

    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.updateDesktopWidth()
        this.slideToPosition(0)
      }, 300)
    })
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('a.bullet, a.arrow').removeEventListener();

    window.removeEventListener();
  }
}

window.customElements.define('slider-container', SliderContainer);