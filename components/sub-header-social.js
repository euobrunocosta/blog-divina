const templateSubHeaderSocial = document.createElement('template');
templateSubHeaderSocial.innerHTML = /*html*/`
  ${reset}
  <style>
    section {
      position: absolute;
      right: 0;
      width: 65px;
      height: 220px;
      background-color: #146273;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    a {
      display: block;
      width: 65px;
      height: 23px;
      background: no-repeat center;
      background-size: 23px 23px;
      text-indent: -9999px;
      overflow: hidden;
    }

    a.instagram {
      background-image: url('../images/icons/instagram.svg');
    }

    a.twitter {
      background-image: url('../images/icons/twitter.svg');
    }

    a.facebook {
      background-image: url('../images/icons/facebook.svg');
    }
  </style>
  <section>
    <a href="#" class="instagram">Instagram</a>
    <a href="#" class="twitter">Twitter</a>
    <a href="#" class="facebook">Facebook</a>
  </section>
`

class SubHeaderSocial extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateSubHeaderSocial.content.cloneNode(true))
  }
}

window.customElements.define('sub-header-social', SubHeaderSocial);