const templateNavSocial = document.createElement('template');
templateNavSocial.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    section {
      height: 13.75rem;
      background-color: #146273;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    a {
      display: block;
      width: 4.0625rem;
      height: 1.4375rem;
      background: no-repeat center;
      background-size: 1.4375rem 1.4375rem;
      text-indent: -624.9375rem;
      overflow: hidden;
    }

    a.instagram {
      background-image: url('./images/icons/instagram.svg');
    }

    a.twitter {
      background-image: url('./images/icons/twitter.svg');
    }

    a.facebook {
      background-image: url('./images/icons/facebook.svg');
    }

    @media screen and (max-width: ${breakPoint}rem) {
      section {
        display: none;
      }
    }
  </style>
  <section>
    <a href="#" class="instagram">Instagram</a>
    <a href="#" class="twitter">Twitter</a>
    <a href="#" class="facebook">Facebook</a>
  </section>
`

class NavSocial extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateNavSocial.content.cloneNode(true))
  }
}

window.customElements.define('nav-social', NavSocial);