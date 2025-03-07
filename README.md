# GitWiki

GitWiki é uma aplicação web que permite buscar repositórios no GitHub e gerenciar uma lista de repositórios favoritos. Este projeto foi criado usando [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades

- Buscar repositórios no GitHub pelo nome.
- Adicionar repositórios à lista de favoritos.
- Remover repositórios da lista de favoritos.
- Visualizar detalhes dos repositórios adicionados.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm install`

Instala as dependencias do projetos

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.


## Estrutura do Projeto

```plaintext
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   └── github.png
│   ├── components
│   │   ├── Button
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Input
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── ItemRepo
│   │       ├── index.js
│   │       └── styles.js
│   ├── pages
│   │   ├── App.js
│   │   └── styles.js
│   ├── services
│   │   └── api.js
│   ├── index.js
│   └── styles.js
├── .gitignore
├── package.json
└── README.md