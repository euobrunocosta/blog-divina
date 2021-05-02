const templateFooter = document.createElement('template');
templateFooter.innerHTML = /*html*/`
  <style>
    ${globalStyle}
    
    div.top {
      background-image:  url('./images/greenV.svg'), linear-gradient(180deg, #367A9A 0%, #126194 100%);
      background-position: calc(50% - 37.5rem), left;
      background-size: auto 16.25rem;
      background-repeat: no-repeat;
    }

    div.top__container {
      display: flex;
      justify-content: space-between;
      height: 16.25rem;
      padding: 0 8.125rem;
    }

    div.contact {
      padding: 2.5rem 0;
      width: 18.75rem;
      color: white;
    }

    div.contact > h3 {
      font-size: 1.375rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    div.contact > p {
      font-size: 0.75rem;
      margin-bottom: 1.25rem;
    }

    div.contact > ul {
      list-style: none;
      display: flex;
    }

    div.contact > ul > li > a {
      display: block;
      width: 1.875rem;
      height: 1.875rem;
      margin-right: 2.5rem;
      text-indent: -624.9375rem;
      overflow: hidden;
      background-size: 1.875rem auto;
    }

    div.contact > ul > li > a.contact__whatsapp {
      background-image: url('./images/icons/whatsapp.svg');
    }

    div.contact > ul > li > a.contact__email {
      background-image: url('./images/icons/email.svg');
    }

    div.contact > ul > li > a.contact__chat {
      background-image: url('./images/icons/comment.svg');
    }

    div.address {
      display: flex;
      justify-content: space-between;
    }

    div.address__info {
      padding-top: 4.375rem;
      width: 18.75rem;
      color: white;
      font-style: normal;
      display: flex;
      flex-direction: column;
      font-size: 0.875rem;
    }

    div.address__info > span {
      margin-bottom: 0.625rem;
    }

    div.address > iframe {
      width: 23.4375rem;
      height: 16.25rem;
    }

    div.bottom {
      background-image: linear-gradient(180deg, #CC2E5A 50%, #B01A44 100%);
    }
    
    div.bottom__container {
      height: 3.75rem;
      display: flex;
      justify-content: space-between;
    }

    div.bottom__container a {
      margin-left: 8.125rem;
      display: block;
      min-width: 4.0625rem;
      height: 3.75rem;
      background: url('./images/logo.png') no-repeat;
      background-size: auto 2.5rem;
      background-position: left center;
      text-indent: -624.9375rem;
      overflow: hidden;
    }

    div.bottom__container div {
      margin-right: 8.125rem;
      color: white;
      font-size: 0.875rem;
      align-self: center;
    }

    @media screen and (max-width: ${breakPoint}rem) {
      div.top {
        background-size: auto 75%, auto;
        background-position: -25% bottom;
        padding: 3.125rem 1.875rem;
      }

      div.top__container {
        flex-direction: column;
        height: unset;
        padding: 0;
      }

      div.contact {
        width: unset;
        padding: 0;
        margin: 0;
        margin-bottom: 1.25rem;
      }

      div.address {
        flex-direction: column;
      }

      div.address__info {
        padding: 0;
        margin-bottom: 1.25rem;
      }

      div.address > iframe {
        width: 100%;
      }

      div.bottom {
        padding: 0 1.875rem;
      }

      div.bottom__container {
        display: flex;
        justify-content: space-between;
        height: unset;
      }

      div.bottom__container a {
        margin: 0;
      }

      div.bottom__container div {
        margin: 0;
        text-align: right;
      }
    }
  </style>
  <footer>
    <div class="top">
      <comp-container>
        <div class="top__container">
        <div class="contact">
          <h3>Fale conosco</h3>
          <p>Quer Enviar uma mensagem, tirar alguma duvida ou bater um papo?</p>
          <ul>
            <li><a href="#" class="contact__whatsapp">Whatsapp</a></li>
            <li><a href="#" class="contact__email">E-mail</a></li>
            <li><a href="#" class="contact__chat">Chat</a></li>
          </ul>
        </div>
        <div class="address">
          <div class="address__info">
            <strong>Endereço:</strong>
            <span>Rua xxxxxxx, nº05</span>
            <strong>Telefone:</strong>
            <span>(83) 9 8877-8876</span>
            <span>Saiba como chegar &rarr;</span>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.2872641669255!2d-35.890711774372235!3d-7.222950748028898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e6d0b0c9ac5%3A0xf39989a5ef86187e!2sDilis%20Game%20Studio!5e0!3m2!1sen!2sbr!4v1619348705477!5m2!1sen!2sbr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      </comp-container>
    </div>
    <div class="bottom">
      <comp-container>
        <div class="bottom__container">
          <a href="#">vita_place</a>
          <div>© 2021 - Divina Pharma | Todos os direitos reservados</div>
        </div>
      </comp-container>
    </div>
  </footer>
`

class Footer extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateFooter.content.cloneNode(true))
  }
}

window.customElements.define('comp-footer', Footer);