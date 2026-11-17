class PerfilImage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img class="home__image" src="./assets/logo.svg" alt="Foto de uma moça programando">
        `;
    }
}

customElements.define("perfil-image", PerfilImage)