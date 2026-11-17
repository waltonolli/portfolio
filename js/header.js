class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <button class="header_toggle" type="button"
                    aria-label="Abrir menu" aria-expanded="false" aria-controls="header-menu">
                    <span class="header_toggle_bar"></span>
                    <span class="header_toggle_bar"></span>
                    <span class="header_toggle_bar"></span>
                </button>
                <nav class="header_menu" id="header-menu">
                    <a class="header_menu_link" href="index.html">HOME</a>
                    <a class="header_menu_link" href="about.html">SOBRE MIM</a>
                    <a class="header_menu_link" href="resume.html">CV</a>
                </nav>
            </header>
        `;

        const atual = location.pathname.split("/").pop() || "index.html";
        this.querySelectorAll("nav a").forEach((a) => {
            if (a.getAttribute("href") === atual) a.classList.add("ativo");
        });
    }
}

customElements.define("site-header", SiteHeader)
