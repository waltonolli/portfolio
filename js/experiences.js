const experiencias = [
    {
        empresa: "SIAM Indústria de Automação e Monitoramento Ltda",
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
                    "Assistência Técnica às áreas administrativa; Automatização no processo de faturamento.",
                    "Controle de fluxos de trabalho e aprimoramento do setor de faturamento, financeiro e compras.",
                    "Elaboração e atualização de normas e procedimentos.",
                    "Compras - contato com fornecedores, cotações e compras de matéria-prima e insumos.",
                    "Faturamento - entrada e saída de Notas Fiscais nacionais e de importação.",
                    "Controle de estoque (entradas e saídas, garantia de recursos para produção e organização).",
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
                                        <li class="resume__li__subtitle">${cargo.titulo} (${cargo.periodo})
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
