class PerfilImage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img class="home__image" src="./assets/negocio-digital.svg" alt="Imagem ilustrativa de um negocio">
        `;
    }
}

customElements.define("perfil-image", PerfilImage)