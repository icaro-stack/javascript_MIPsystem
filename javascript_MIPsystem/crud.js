// CREATE: adiciona um novo registro e grava a lista completa[cite: 5, 10]
function criar(item) {
    const lista = carregarDados();[cite: 10]
    item.id = Date.now(); // identificador único[cite: 9, 10]
    lista.push(item);[cite: 10]
    salvarDados(lista);[cite: 10]
}

// READ: devolve os dados gravados[cite: 5, 11]
function listar() {
    return carregarDados();[cite: 11]
}

// UPDATE: localiza pelo id e substitui os dados[cite: 5, 12]
function atualizar(id, novosDados) {
    const lista = carregarDados();[cite: 12]
    const indice = lista.findIndex(item => item.id === id);[cite: 12]
    
    if (indice === -1) {[cite: 12]
        alert("Registro não encontrado!");[cite: 12]
        return;[cite: 12]
    }
    
    lista[indice] = { ...lista[indice], ...novosDados, id };[cite: 12]
    salvarDados(lista);[cite: 12]
}

// DELETE: remove com confirmação do usuário e regrava a lista usando filter()[cite: 5, 13]
function excluir(id) {
    if (!confirm("Deseja realmente excluir este registro?")) {[cite: 13]
        return;[cite: 13]
    }
    const lista = carregarDados().filter(item => item.id !== id);[cite: 13]
    salvarDados(lista);[cite: 13]
    atualizarTabela();[cite: 13]
}

// PREPARAR EDIÇÃO: preenche o formulário com os dados atuais[cite: 12]
function prepararEdicao(id) {
    const item = carregarDados().find(p => p.id === id);[cite: 12]
    document.getElementById("nome_fazenda").value = item.nome_fazenda;[cite: 12]
    document.getElementById("municipio").value = item.municipio;[cite: 12]
    document.getElementById("area_total").value = item.area_total;[cite: 12]
    document.getElementById("id-edicao").value = id;[cite: 12]
}