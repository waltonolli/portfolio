class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <nav class="header_menu">
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