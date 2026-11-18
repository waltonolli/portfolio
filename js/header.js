class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="header__div__logo">
                <a href="index.html"><img  class="header__logo" src="./assets/logo.svg" alt="logo W"></a>
                <p>Portfólio de Walkyria</p>
                </div>
                <button class="header__toggle" type="button"
                    aria-label="Abrir menu" aria-expanded="false" aria-controls="header-menu">
                    <span class="header__toggle__bar"></span>
                    <span class="header__toggle__bar"></span>
                    <span class="header__toggle__bar"></span>
                </button>
                <nav class="header__menu" id="header-menu">
                    <a class="header__menu__link" href="index.html">Home</a>
                    <a class="header__menu__link" href="about.html">Sobre mim</a>
                    <a class="header__menu__link" href="resume.html">Resumo profissional</a>
                </nav>
            </header>
        `;

        const atual = location.pathname.split("/").pop() || "index.html";
        this.querySelectorAll("nav a").forEach((a) => {
            if (a.getAttribute("href") === atual) a.classList.add("ativo");
        });

        initMenuHamburger(this);
    }
}

customElements.define("site-header", SiteHeader)
