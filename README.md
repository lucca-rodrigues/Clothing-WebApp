# Oque é Clothing?

Clothing é uma plataforma para cadastro e controle de vestuários em estoque, e torna possível visualizar o seu valor estimado e quantidade disponível, além de nome e descrição do estado atual.

# Instalações

* Primeiramente, acesse o seu terminal e pasta desejada.
* Em seguida faça o clone do projeto com ```js git clone https://github.com/lucca-rodrigues/Clothing-WebApp.git```
* Feito isso acesse a pasta do repositório com ```cmd cd Clothing-WebApp```
* Faça a instalação das dependências com ```cmd yarn ``` ou ```cmd npm install``` (Recomendamos a utilização do Yarn).

# API Service
* Agora com o projeto e depenências instalados, faça o clone da API Service ```cmd git clone https://github.com/lucca-rodrigues/Clothing-Service-API.git```
* Instale todas as dependências com ```cmd yarn ``` ou ```cmd npm install```.
* O projeto já possui um banco de dados Sqlite integrado para facilitar a execução, mas se desejar utilizar outro banco de dados faça a instalação do driver desejado e em seguida configure os dados de conexão no ```cmd .env```.


# Execução com banco de dados atual:
* Se optar por utilizar o mesmo banco, basta rodar ```cmd yarn dev``` (Já preparamos alguns scrips para facilitar o processo).


# Execução com novo banco de dados:
* Instale o driver do banco de dados
* Faça a configuração de conexão no ```cmd .env```.
* Aqui segue uma lista com os scripts disponíveis para facilitar o processo:
```javascript
 "scripts": {
    "start": "node server.js",
    "dev": "adonis serve --dev", // START O PROJETO
    "migrate": "adonis migration:run", // RODAR MIGRATIONS
    "refresh": "adonis migration:refresh", // DELETAR E RE-CRIAR MIGRATIONS
    "reset": "adonis migration:reset", // REMOVER MIGRATIONS
    "model": "adonis make:model", // CRIAR NOVOS MODELS
    "controller": "adonis make:controller",// CRIAR NOVOS CONTROLLERS
    "migration": "adonis make:migration", // CRIAR NOVAS MIGRATIONS
    "test": "node ace test"
  },
```
* Para utilizar os scrips é simples ```cmd yarn + comando Ex: yarn migrate ou npm run migrate```.

# Startando o Front-end
* Se sua api já deve estar rodando, agora é só startar o Front-end com ```cmd yarn start``` ou ```cmd npm run start```
