// Exibe os registros na tabela utilizando forEach[cite: 11]
function atualizarTabela() {
    const lista = listar();[cite: 11]
    const corpo = document.getElementById("corpo-tabela");[cite: 11]
    corpo.innerHTML = "";[cite: 11]
    
    lista.forEach(item => {[cite: 11]
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
        `;[cite: 11]
    });
}

// Validação dos campos antes de gravar[cite: 15]
function validar(dados) {
    if (dados.nome_fazenda === "") {[cite: 15]
        alert("Informe o nome da fazenda!"); return false;[cite: 15]
    }
    if (dados.municipio === "") {[cite: 15]
        alert("Informe o município!"); return false;[cite: 15]
    }
    if (isNaN(dados.area_total) || dados.area_total <= 0) {[cite: 15]
        alert("Área total deve ser maior que zero!"); return false;[cite: 15]
    }
    return true;[cite: 15]
}

// Envio do formulário com delegação de eventos[cite: 14]
const formulario = document.getElementById("form-registro");[cite: 14]
formulario.addEventListener("submit", function (evento) {[cite: 14]
    evento.preventDefault(); // impede o recarregamento da página[cite: 14]
    
    const dados = {
        nome_fazenda: document.getElementById("nome_fazenda").value.trim(),[cite: 14]
        municipio: document.getElementById("municipio").value.trim(),[cite: 14]
        area_total: parseFloat(document.getElementById("area_total").value)[cite: 14]
    };
    
    if (!validar(dados)) return;[cite: 14]
    
    const idEdicao = document.getElementById("id-edicao").value;[cite: 14]
    
    if (idEdicao) {[cite: 14]
        atualizar(Number(idEdicao), dados); // UPDATE[cite: 14]
    } else {[cite: 14]
        criar(dados); // CREATE[cite: 14]
    }
    
    formulario.reset();[cite: 14]
    document.getElementById("id-edicao").value = "";[cite: 14]
    atualizarTabela();[cite: 14]
});

// Inicializa a tabela ao carregar a página
window.onload = atualizarTabela;