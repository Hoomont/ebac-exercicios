const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtém os dados do formulário
    const nome = document.querySelector("input[name='nome']").value;
    const telefone = document.querySelector("input[name='telefone']").value;

    // Adiciona os dados à tabela de contatos
    const contato = {
        nome: nome,
        telefone: telefone
    };

    const contatos = document.querySelector("table").querySelector("tbody");
    contatos.innerHTML += `<tr>
        <td>${nome}</td>
        <td>${telefone}</td>
    </tr>`;
});
