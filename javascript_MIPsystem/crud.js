// CREATE: adiciona um novo registro e grava a lista completa
function criar(item) {
    const lista = carregarDados();
    item.id = Date.now(); // identificador único
    lista.push(item);
    salvarDados(lista);
}

// READ: devolve os dados gravados
function listar() {
    return carregarDados();
}

// UPDATE: localiza pelo id e substitui os dados
function atualizar(id, novosDados) {
    const lista = carregarDados();
    const indice = lista.findIndex(item => item.id === id);
    
    if (indice === -1) {
        alert("Registro não encontrado!");
        return;
    }
    
    lista[indice] = { ...lista[indice], ...novosDados, id };
    salvarDados(lista);
}

// DELETE: remove com confirmação do usuário e regrava a lista usando filter()
function excluir(id) {
    if (!confirm("Deseja realmente excluir este registro?")) {
        return;
    }
    const lista = carregarDados().filter(item => item.id !== id);
    salvarDados(lista);
    atualizarTabela();
}

// PREPARAR EDIÇÃO: preenche o formulário com os dados atuais
function prepararEdicao(id) {
    const item = carregarDados().find(p => p.id === id);
    document.getElementById("nome_fazenda").value = item.nome_fazenda;
    document.getElementById("municipio").value = item.municipio;
    document.getElementById("area_total").value = item.area_total;
    document.getElementById("id-edicao").value = id;
}
