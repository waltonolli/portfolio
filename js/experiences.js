const experiencias = [
    {
        empresa: "SIAM Indústria",
        cargos: [
            {
                titulo: "Serviços Administrativos (Remoto)",
                periodo: "Jan/2024 - momento",
                atividades: [
                    "Contas a pagar e a receber. Entrada de NFs.",
                    "Controles administrativos, controle/fluxo de caixa, fechamento contábil.",
                ],
            },
            {
                titulo: "SDR - Repres. de Desenvolv. de Vendas (Híbrido)",
                periodo: "Out/2021 – Jan/2024",
                atividades: [
                    "Assistência técnica à área Administrativa.",
                    "Criação de conteúdo, curadoria e Gestão para mídias sociais.",
                    "Desenvolvimento do catálogo de produtos.",
                    "Prospecção de novos clientes pelos canais da internet.",
                ],
            },
            {
                titulo: "Analista Administrativo (Presencial)",
                periodo: "Nov/2017 - Set/2021",
                atividades: [
                    "Implementação e integração do processo financeiro no sistema ERP da empresa.",
                    "Redução de processos burocráticos e garantia da integridade dos dados.",
                    "Implementação e Integração do controle de estoque no sistema ERP.",
                    "Automatização no processo de faturamento.",
                    "Assistência Técnica às áreas administrativa",
                    "Controle de fluxos de trabalho, fluxo de caixa, fechamento contábil.",
                    "Aprimoramento do setor de faturamento, financeiro e compras.",
                    "Elaboração e atualização de normas e procedimentos.",
                    "Compras e faturamento, entrada e saída de NFs nacionais e de importação.",
                    "Controle e manutenção de estoque.",
                    "Controle financeiro - cobranças, recebimentos, pagamentos, conciliação bancária.",
                ],
            },
        ],
    },
];

class ResumeExperiences extends HTMLElement {
    connectedCallback() {
        const itens = experiencias
            .map(
                (experiencia) => `
                    <li class="resume__li__title">
                        ${experiencia.empresa}
                        <ul>
                            ${experiencia.cargos
                                .map(
                                    (cargo) => `
                                        <li class="resume__li__subtitle">${cargo.titulo}</li>
                                        <li class="resume__li__subtitle">(${cargo.periodo})
                                            <ul class="resume__ul__operation">
                                                ${cargo.atividades.map((atividade) => `<li class="resume__li__description">${atividade}</li>`).join("")}
                                            </ul>
                                        </li>`
                                )
                                .join("")}
                        </ul>
                    </li>`
            )
            .join("");

        this.innerHTML = `<ul class="resume__text">${itens}</ul>`;
    }
}

customElements.define("resume-experiences", ResumeExperiences);
