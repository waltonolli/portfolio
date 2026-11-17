class MenuHamburger extends HTMLElement {
    connectedCallback() {
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

customElements.define("menu-hamburger", MenuHamburger)