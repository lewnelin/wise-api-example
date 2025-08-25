# Projeto de Exemplo - WISE API

Este repositório demonstra o uso da biblioteca [wise-api](https://www.npmjs.com/package/wise-api/v/2.0.10) em sua versão 2.0.10.  
A API fornece uma interface para comunicação com a [Wise (antiga TransferWise)](https://wise.com/), permitindo operações de autenticação, consultas e transações financeiras.

---

## Pré-requisitos

1. Node.js 14 ou superior instalado.  
2. Conta válida na [Wise](https://wise.com/) e chave de API (token de acesso).  
3. Biblioteca instalada via npm ou yarn.

---

## Instalação

```bash
git clone https://github.com/seu-usuario/wise-api-example.git
cd wise-api-example

npm install
```

## Configuração

Crie um arquivo .env na raiz do projeto:

WISE_API_TOKEN=seu_token_aqui
WISE_API_ENV=sandbox


WISE_API_TOKEN: Token da API fornecido pela Wise.

WISE_API_ENV: Pode ser sandbox (testes) ou live (produção).

## Uso

Exemplo simples de inicialização e consulta de perfil:

require('dotenv').config();
const Wise = require('wise-api');

// Inicialização
const wise = new Wise({
  token: process.env.WISE_API_TOKEN,
  env: process.env.WISE_API_ENV || 'sandbox'
});

// Função exemplo
(async () => {
  try {
    const profiles = await wise.profiles.retrieve();
    console.log('Perfis disponíveis:', profiles);
  } catch (err) {
    console.error('Erro ao consultar a API:', err.message);
  }
})();

## Estrutura do Projeto
.
├── index.js         # Código de exemplo principal
├── package.json
├── .env.example     # Exemplo de variáveis de ambiente
└── README.md

## Comandos Disponíveis

npm start → Executa o exemplo principal (index.js).

npm run lint → (opcional) Verificação de estilo de código.

Recursos Úteis

Documentação oficial Wise

Pacote wise-api no npm

## Aviso

Este projeto é apenas um exemplo educacional.
Não utilize tokens reais em ambientes públicos e nunca compartilhe suas credenciais.
