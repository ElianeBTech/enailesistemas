class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<header class="topo">
   <div class="logo"> <img src="../../assets/image/logo.png"/></div>
  
        <nav class="navegacao">
        <a href="./index.html">Home</a>
        <a href="#">Serviços</a>
        <a href="https://elianebtech.github.io/enailesistemas/js/pages/login.html">Login</a>
        <a href="/js/pages/cadastro.html">Cadastro</a>
    </nav>
    </header>`
  }
}

customElements.define('site-header', SiteHeader)
