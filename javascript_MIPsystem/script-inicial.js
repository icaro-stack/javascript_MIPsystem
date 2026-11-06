function inicializarDados() {
    if (!localStorage.getItem("mip_fazendas")) {
        const fazendasIniciais = [
            { id: Date.now(), nome_fazenda: "Fazenda Santa Cruz", municipio: "Ribeirão Preto - SP", area_total: 250.5 },
            { id: Date.now() + 1, nome_fazenda: "Sítio das Águas", municipio: "Uberlândia - MG", area_total: 85 }
        ];
        localStorage.setItem("mip_fazendas", JSON.stringify(fazendasIniciais));
    }
}
inicializarDados();
