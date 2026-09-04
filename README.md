# Lista de Tarefas

Aplicacao web para criar, listar, editar e excluir tarefas. O projeto foi desenvolvido com React e Vite e utiliza uma API local simulada pelo `json-server` para persistir os dados no arquivo `db.json`.

## Funcionalidades

- Criar novas tarefas
- Listar tarefas salvas
- Editar o nome de uma tarefa
- Excluir tarefas
- Indicadores de carregamento durante as operacoes
- Navegacao entre a pagina inicial e a pagina "Sobre Nos"
- Pagina para rotas inexistentes

## Tecnologias

- [React](https://react.dev/) 18
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [JSON Server](https://github.com/typicode/json-server)

## Pre-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm

## Como executar

1. Clone este repositorio e acesse a pasta do projeto:

	```bash
	git clone <URL_DO_REPOSITORIO>
	cd Projeto-React-Lista-Tarefas
	```

2. Instale as dependencias:

	```bash
	npm install
	```

3. Em um terminal, inicie a API local:

	```bash
	npm run server
	```

	A API sera disponibilizada em `http://localhost:3333`.

4. Em outro terminal, inicie a aplicacao:

	```bash
	npm run dev
	```

	Abra a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Configuracao da API

Por padrao, a aplicacao usa `http://localhost:3333` como backend. Para apontar para outra API, crie um arquivo `.env` na raiz do projeto:

```env
VITE_APP_API_BACKEND=http://localhost:3333
```

A API precisa disponibilizar o recurso `tarefas` com objetos no formato:

```json
{
  "id": 1,
  "nome": "Estudar React"
}
```

## Scripts disponiveis

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite |
| `npm run server` | Inicia o JSON Server usando `db.json` na porta 3333 |
| `npm run build` | Gera a versao de producao |
| `npm run preview` | Visualiza localmente a build de producao |
| `npm run lint` | Executa o ESLint |

## Estrutura principal

```text
src/
  Componentes/    Componentes reutilizaveis da interface
  Contexts/        Estado global e operacoes das tarefas
  Layouts/         Layout principal da aplicacao
  pages/           Paginas e rotas
  services/        Configuracao das requisicoes HTTP
db.json            Banco de dados local do JSON Server
```

## Build de producao

Para gerar os arquivos otimizados:

```bash
npm run build
```

Os arquivos serao gerados na pasta `dist/`.

## Licenca

Este projeto e um exercicio pratico de desenvolvimento com React.
