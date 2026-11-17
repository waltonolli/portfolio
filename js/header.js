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

        // Menu hamburger (mobile)
        const header = this.querySelector(".header");
        const toggle = this.querySelector(".header_toggle");

        const setOpen = (open) => {
            header.classList.toggle("aberto", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        };

        toggle.addEventListener("click", () => {
            setOpen(!header.classList.contains("aberto"));
        });

        // Fecha ao clicar em um link, ao apertar Esc ou ao clicar fora
        this.querySelectorAll(".header_menu_link").forEach((a) => {
            a.addEventListener("click", () => setOpen(false));
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") setOpen(false);
        });

        document.addEventListener("click", (e) => {
            if (!this.contains(e.target)) setOpen(false);
        });
    }
}

customElements.define("site-header", SiteHeader)
