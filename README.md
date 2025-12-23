# Banco do Marcos - Transfer PIX Microservices

Este projeto é uma simulação simples de um sistema de transferências PIX, composto por um frontend estático e um backend em Node.js.

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

*   **backend/**: Contém a API construída com Node.js e Express.
*   **frontend/**: Contém a interface do usuário (HTML, CSS, JS).

## Pré-requisitos

*   Node.js instalado (versão 14 ou superior recomendada).

## Instalação e Execução

### 1. Backend

O backend é responsável por processar as requisições de transferência.

1.  Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Inicie o servidor:
    ```bash
    npm start
    ```
    O servidor rodará em `http://localhost:3000`.

### 2. Frontend

O frontend é uma página estática que se comunica com o backend.

1.  Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

2.  Abra o arquivo `index.html` diretamente no seu navegador.
    *   Você pode clicar duas vezes no arquivo ou arrastá-lo para o navegador.
    *   Alternativamente, se usar VS Code, pode usar a extensão "Live Server".

## Uso

1.  Com o backend rodando, abra o `index.html` no navegador.
2.  Preencha o campo **Chave PIX** (ex: `teste@email.com`).
3.  Preencha o campo **Valor** (ex: `100.00`).
4.  Clique em **Transferir**.
5.  Aguarde a mensagem de sucesso ou erro.

## Endpoints da API

*   `POST /api/transfer`
    *   **Body**: `{ "key": "string", "amount": number }`
    *   **Response**: `{ "message": "Transfer successful", "transactionId": "...", "timestamp": "..." }`
