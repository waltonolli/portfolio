const cursos = [
    {
        nome: "Curso HTML e CSS",
        instituicao: "Alura cursos",
        certificado: "https://cursos.alura.com.br/certificate/6246bd2a-c4ab-469b-8a82-191b6ab2ae50?lang=pt_BR",
    },
    {
        nome: "Curso Lógica de programação",
        instituicao: "Alura cursos",
        certificado: "https://cursos.alura.com.br/certificate/06a03a74-eb16-4f9b-bb2f-45c821f17300?lang=pt_BR",
    },
    {
        nome: "Graduação Tecnologia em Análise e Desenvolvimento de Sistemas",
        instituicao: "Senac EAD",
        certificado: "",
    },
    {
        nome: "Full-Stack Engineer",
        instituicao: "CodeCademy",
        certificado: "",
    },
];

class ResumeCourses extends HTMLElement {
    connectedCallback() {
        const itens = cursos
            .map((curso) => {
                const link = curso.certificado
                    ? ` <a href="${curso.certificado}" target="_blank" rel="noopener noreferrer">com certificado</a>`
                    : "";
                return `<li>${curso.nome} - ${curso.instituicao}${link}</li>`;
            })
            .join("");

        this.innerHTML = `<ul class="resume__text cursos">${itens}</ul>`;
    }
}

customElements.define("resume-courses", ResumeCourses);
