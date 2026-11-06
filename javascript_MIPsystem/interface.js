// Exibe os registros na tabela utilizando forEach
function atualizarTabela() {
    const lista = listar();
    const corpo = document.getElementById("corpo-tabela");
    corpo.innerHTML = "";
    
    lista.forEach(item => {
        corpo.innerHTML += `
            <tr>
                <td>${item.nome_fazenda}</td>
                <td>${item.municipio}</td>
                <td>${item.area_total.toFixed(2)} ha</td>
                <td>
                    <button class="editar" onclick="prepararEdicao(${item.id})">Editar</button>
                    <button class="excluir" onclick="excluir(${item.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

// Validação dos campos antes de gravar
function validar(dados) {
    if (dados.nome_fazenda === "") {
        alert("Informe o nome da fazenda!"); return false;
    }
    if (dados.municipio === "") {
        alert("Informe o município!"); return false;
    }
    if (isNaN(dados.area_total) || dados.area_total <= 0) {
        alert("Área total deve ser maior que zero!"); return false;
    }
    return true;
}

// Envio do formulário com delegação de eventos
const formulario = document.getElementById("form-registro");
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o recarregamento da página
    
    const dados = {
        nome_fazenda: document.getElementById("nome_fazenda").value.trim(),
        municipio: document.getElementById("municipio").value.trim(),
        area_total: parseFloat(document.getElementById("area_total").value)
    };
    
    if (!validar(dados)) return;
    
    const idEdicao = document.getElementById("id-edicao").value;
    
    if (idEdicao) {
        atualizar(Number(idEdicao), dados); // UPDATE
    } else {
        criar(dados); // CREATE
    }
    
    formulario.reset();
    document.getElementById("id-edicao").value = "";
    atualizarTabela();
});

// Inicializa a tabela ao carregar a página
window.onload = atualizarTabela;
