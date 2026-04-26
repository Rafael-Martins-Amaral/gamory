# 🎮 Gamory — Product Requirements Document (PRD)

## 📌 1. Visão Geral
Gamory é uma aplicação web inspirada no Letterboxd, focada na avaliação e organização de jogos digitais.
O sistema permite que usuários atribuam notas e escrevam comentários, criando um histórico pessoal de experiências.

---

### 🎯 1.1 Objetivo do Produto
Desenvolver uma aplicação web responsiva que permita:
- Avaliação (nota)
- Comentários
- Visualização de lista de jogos

---

### 👤 1.2 Público-Alvo
- Estudantes
- Gamers casuais e hardcore
- Usuários que desejam organizar jogos jogados

---

## 🚀 2. Funcionalidades Principais
- Selecionar gênero
- Selecionar plataforma
- Atribuir nota (1 a 5)
- Adicionar comentário

---

### 📋 2.1 Listagem de Jogos
- Exibição em cards ou tabela
- Mostrar título, gênero e nota
- Atualização dinâmica via API
  



### 🗓️ 2.2 Escopo do Projeto

- 3 páginas HTML
- Formulário com validação
- API fake
- LocalStorage
- Responsividade

# 👤 3. Histórias de Usuário

## 🔐 Épico 1: Autenticação e Conta

### US01 - Criação de Conta
Como um Visitante, quero preencher um formulário com meus dados (nome, email e senha) para criar uma conta no Gamory.
Critérios de Aceitação:

- O email deve ter formato válido
- A senha deve ter no mínimo 6 caracteres
- O usuário deve ser redirecionado após cadastro

### US02 - Login no Sistema
Como um Usuário, quero inserir meu email e senha para acessar minha conta e visualizar meus jogos.
Critérios de Aceitação:

- Validação de credenciais
- Exibir mensagem de erro em caso de falha

---

## 📋 Épico 2: Listagem e Visualização

### US03 - Visualizar Lista de Jogos
Como um Usuário, quero ver uma lista dos meus jogos cadastrados em formato de cards ou tabela para acompanhar minhas avaliações.
Critérios de Aceitação:

- Exibir título, gênero, plataforma e nota

### US04 - Visualizar Detalhes do Jogo
Como um Usuário, quero visualizar os detalhes completos de um jogo (incluindo comentário) para relembrar minha experiência.
Critérios de Aceitação:

- Exibir informações sobre os jogos
- Layout organizado e responsivo

---

## ⭐ Épico 3: Avaliações

### US05 - Atribuir Nota
Como um Usuário, quero dar uma nota de 1 a 5 para um jogo para expressar minha opinião.
Critérios de Aceitação:

- Apenas valores entre 1 e 5
- Pode ser representado por estrelas
- Obrigatório no cadastro
