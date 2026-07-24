
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="rodape"><p>© Desenvolvido por Eliane Barboza - Atividade do curso Dev. Full Stack 2026 - +praTi & Codifica</p>
  </footer>`
  }
}
customElements.define('site-footer', SiteFooter)