const redes = [
    { nome: "GitHub", url: "https://github.com/waltonolli", icone: "./assets/github-original.svg" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/waltonolli", icone: "./assets/linkedin-original.svg" },
    { nome: "Medium", url: "https://medium.com/@waltonolli", icone: "./assets/medium-original.svg" }, 
    { nome: "Instagram", url: "https://instagram.com/wal.tonolli", icone: "./assets/instagram.svg" },
    { nome: "X", url: "https://x.com", icone: "./assets/x.svg" },
    { nome: "Twitch", url: "https://www.twitch.tv", icone: "./assets/twitch-original.svg" },
];

class SocialLinks extends HTMLElement {
    connectedCallback() {
        const links = redes
            .map(
                (rede) => `
                    <a class="home__boxes" href="${rede.url}" target="_blank" rel="noopener noreferrer">
                        <img src="${rede.icone}" alt="${rede.nome}">
                    </a>`
            )
            .join("");

        this.innerHTML = `
            <div class="home__links">
                <h2 class="home__subtitle">Acesse minhas redes</h2>
                <div class="links">${links}
                </div>
            </div>
        `;
    }
}

customElements.define("social-links", SocialLinks);
