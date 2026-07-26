class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<header class="topo">
   <div class="logo"> <img src="https://github.com/ElianeBTech/enailesistemas/blob/main/assets/image/logo.png"/></div> 
        <nav class="navegacao">
        <a href="https://elianebtech.github.io/enailesistemas/js/pages/index.html">Home</a>
        <a href="#">Serviços</a>
        <a href="https://elianebtech.github.io/enailesistemas/js/pages/login.html">Login</a>
        <a href="https://elianebtech.github.io/enailesistemas/js/pages/cadastro.html">Cadastro</a>
    </nav>
    </header>`
  }
}

customElements.define('site-header', SiteHeader)
