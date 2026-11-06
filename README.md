# 🌾 MIPsystem - CRUD de Fazendas (JavaScript)

Este repositório contém a implementação prática da atividade de **CRUD com JavaScript** para a disciplina de **Programação para WEB I** (FHO UNIARARAS). 

O projeto aplica os conceitos de manipulação do DOM, eventos e armazenamento local (`localStorage`), substituindo a anterior abordagem em PHP + MySQL por uma interface dinâmica baseada em JavaScript nativo (Vanilla JS).

A entidade escolhida para este CRUD baseia-se no tema do nosso Projeto Interdisciplinar (PI): o **MIPsystem** (Plataforma Inteligente para Monitoramento e Otimização de Infraestruturas Sustentáveis). A entidade gerida nesta aplicação é a de **Fazendas**.

---

## 👥 Identificação do Grupo

**Grupo:** MIPsystem - Sistema Inteligente de Apoio à Decisão para Manejo de Pragas Agrícolas

**Integrantes e RA:**
* Ícaro B. Piazentim - 117993
* Gabriel Pimenta - 117507 
* Sávio Luís - 118458
* Matheus Domene - 119129 
* Guilherme Caetano - 118533 

**Professores:** Prof. Diego Henrique Negretto / Prof. Dr. Marcelo George de Castro

---

## ✨ Funcionalidades (CRUD)

A aplicação executa as quatro operações básicas sem recarregar a página:
- **Create (Criar):** Adiciona uma nova fazenda ao array e guarda no `localStorage`.
- **Read (Ler):** Carrega os dados guardados e exibe-os dinamicamente numa tabela HTML.
- **Update (Atualizar):** Permite editar os dados de uma fazenda selecionada (Nome, Município e Área).
- **Delete (Excluir):** Remove um registo do armazenamento mediante confirmação prévia do utilizador.

---

## 📂 Estrutura de Ficheiros

```text
crud-javascript/
│
│ index.html                 # Interface principal (Formulário + Tabela)
│ README.md                  # Documentação do repositório
│ style.css                  # Aparência visual da página
│ estrutura-dados.txt        # Documentação dos campos e dados de exemplo
│ script_inicial.js          # Semeia dados de exemplo no primeiro acesso
│ banco.js                   # Camada única de acesso ao localStorage (try/catch)
│ crud.js                    # Lógica das funções de criar, listar, atualizar e excluir
│ interface.js               # Manipulação do DOM, validação e eventos
