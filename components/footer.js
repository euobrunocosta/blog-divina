const templateFooter = document.createElement('template');
templateFooter.innerHTML = /*html*/`
  ${reset}
  <style>
    div.top {
      background-image:  url('../images/greenV.svg'), linear-gradient(180deg, #367A9A 0%, #126194 100%);
      background-position: calc(50% - 600px), left;
      background-size: auto 260px;
      background-repeat: no-repeat;
      min-width: 1300px;
    }

    div.top__container {
      display: flex;
      justify-content: space-between;
      height: 260px;
      padding: 0 130px;
    }

    div.contact {
      padding: 40px 0;
      width: 300px;
      color: white;
    }

    div.contact > h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    div.contact > p {
      font-size: 12px;
      margin-bottom: 20px;
    }

    div.contact > ul {
      list-style: none;
      display: flex;
    }

    div.contact > ul > li > a {
      display: block;
      width: 30px;
      height: 30px;
      margin-right: 40px;
      text-indent: -9999px;
      overflow: hidden;
      background-size: 30px auto;
    }

    div.contact > ul > li > a.contact__whatsapp {
      background-image: url('../images/icons/whatsapp.svg');
    }

    div.contact > ul > li > a.contact__email {
      background-image: url('../images/icons/email.svg');
    }

    div.contact > ul > li > a.contact__chat {
      background-image: url('../images/icons/comment.svg');
    }

    div.address {
      display: flex;
      justify-content: space-between;
    }

    div.address__info {
      padding-top: 70px;
      width: 300px;
      color: white;
      font-style: normal;
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }

    div.address__info > span {
      margin-bottom: 10px;
    }

    div.address > iframe {
      width: 375px;
      height: 260px;
    }

    div.bottom {
      background-image: linear-gradient(180deg, #CC2E5A 50%, #B01A44 100%);
    }
    
    div.bottom__container {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }

    div.bottom__container a {
      margin-left: 130px;
      display: block;
      width: 65px;
      height: 60px;
      background: url('../images/logo.png') no-repeat;
      background-size: auto 40px;
      background-position: center;
      text-indent: -9999px;
      overflow: hidden;
    }

    div.bottom__container div {
      margin-right: 130px;
      color: white;
      font-size: 14px;
      line-height: 60px;
    }
  </style>
  <footer>
    <div class="top">
      <wc-container>
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
      </wc-container>
    </div>
    <div class="bottom">
      <wc-container>
        <div class="bottom__container">
          <a href="#">vita_place</a>
          <div>© 2021 - Divina Pharma | Todos os direitos reservados</div>
        </div>
      </wc-container>
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

window.customElements.define('wc-footer', Footer);