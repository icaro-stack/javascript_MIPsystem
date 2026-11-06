const CHAVE = "mip_fazendas";

function carregarDados() {
    try {
        const json = localStorage.getItem(CHAVE);
        return json ? JSON.parse(json) : [];
    } catch (erro) {
        console.error("Erro ao carregar:", erro);
        alert("Não foi possível carregar os dados!");
        return [];
    }
}

function salvarDados(lista) {
    try {
        localStorage.setItem(CHAVE, JSON.stringify(lista));
    } catch (erro) {
        console.error("Erro ao salvar:", erro);
        alert("Não foi possível salvar os dados!");
    }
}
