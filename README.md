# NLW Agent

Projeto backend em Node.js utilizando Fastify, Drizzle ORM e PostgreSQL (com suporte a Docker).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18+)
- [Docker](https://www.docker.com/products/docker-desktop/) (opcional, para rodar o banco de dados)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd NLW-agent
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agentes"
```

## Banco de Dados com Docker

Suba o banco de dados PostgreSQL usando Docker:

```bash
docker compose up -d
```

## Migrações e Seed

Rode as migrações:

```bash
npx drizzle-kit migrate
```

Popule o banco com dados iniciais (seed):

```bash
npx ts-node src/db/seed.ts
```

## Rodando o servidor

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:3333](http://localhost:3333).

## Rotas

- `GET /health` — Health check
- `GET /rooms` — Lista de salas (rooms)

## Licença

MIT
