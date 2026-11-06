const CHAVE = "mip_fazendas";[cite: 8]

function carregarDados() {
    try {
        const json = localStorage.getItem(CHAVE);[cite: 8]
        return json ? JSON.parse(json) : [];[cite: 8]
    } catch (erro) {
        console.error("Erro ao carregar:", erro);[cite: 8]
        alert("Não foi possível carregar os dados!");[cite: 8]
        return [];[cite: 8]
    }
}

function salvarDados(lista) {
    try {
        localStorage.setItem(CHAVE, JSON.stringify(lista));[cite: 8]
    } catch (erro) {
        console.error("Erro ao salvar:", erro);[cite: 8]
        alert("Não foi possível salvar os dados!");[cite: 8]
    }
}