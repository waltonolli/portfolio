class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <p>Desenvolvido por Walkyria Tonolli.</p>
                <img src="./assets/brasil.svg" alt="bandeira do Brasil">
            </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter)