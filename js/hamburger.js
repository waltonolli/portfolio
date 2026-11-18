// Menu hamburger (mobile) — chamado pelo <site-header> depois de renderizar o HTML
function initMenuHamburger(root) {
    const header = root.querySelector(".header");
    const toggle = root.querySelector(".header__toggle");
    if (!header || !toggle) return;

    const setOpen = (open) => {
        header.classList.toggle("aberto", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", () => {
        setOpen(!header.classList.contains("aberto"));
    });

    // Fecha ao clicar em um link, ao apertar Esc ou ao clicar fora
    root.querySelectorAll(".header__menu__link").forEach((a) => {
        a.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", (e) => {
        if (!root.contains(e.target)) setOpen(false);
    });
}
