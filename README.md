# Talker Manager (API de Gerenciamento de Palestrantes / Speaker Management API)

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorMarinhoArgollo/talker-manager?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/IgorMarinhoArgollo/talker-manager">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/IgorMarinhoArgollo/talker-manager">
    
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </p>
   
O Talker Manager Project representa a essência do backend em um gerenciador de palestrantes criado com propósitos educacionais durante o módulo de Backend do Curso de Desenvolvimento Web Full Stack na Trybe.

**É importante notar que este projeto, sendo uma introdução às práticas de backend, não incorpora um banco de dados relacional. Em vez disso, utiliza um banco de dados em formato de arquivo, com o suporte do módulo fs.**

-----------------------------------------------------------------------------------------------------------------------------------------------
The Talker Manager Project is the backend portion of a speaker manager developed for educational purposes in the Backend module of the Full Stack Web Development Course at Trybe.

**It's worth noting that this project, serving as an initial exploration of backend practices, does not implement a relational database. Instead, it operates with a file-based database, supported by the fs module.**
<br>
<br/>
  
### :earth_americas: Links
<a href="https://talker-manager-one.vercel.app/">Base</a><br>
<a href="https://talker-manager-one.vercel.app/api-docs/">Docs</a><br><br>

### Rotas / Routes
![Routes](./assets/rotas.png)

<br />


### :dart: Objetivos / Goals
- :white_check_mark: **Desenvolver o backend de um gerenciador de palestrantes / Develop the backend for a speaker management system;**
- :white_check_mark: Implementar rota de login de usuários / Login route implementation;
- :white_check_mark: Criar rotas que interajam com o arquivo do banco de dados / Create routes to interact with the database file;
- :white_check_mark: Reforçar segurança com práticas como Helmet e Rate-Limit / Enhance security through practices such as Helmet and Rate-Limit;
- :white_check_mark: Preparar documentação utilizando Swagger / Prepare documentation using Swagger;
- :white_check_mark: Configurar Docker para execução do software / Configure Docker for software execution.<br><br>

### :computer: Tecnologias Utilizadas / Used Technologies
  * <img alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  * <img alt="node" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  * <img alt="express" src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
  * <img alt="docker" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
  * <img alt="swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" />
  * Helmet
  * Rate-Limit
  * FS Module<br><br>

### :gear: Como Rodar / How to Run
  #### 1 Clone o repositório (via SSH) / Clone the repository (via SSH)
  No terminal / On terminal:
  
    git clone git@github.com:IgorMarinhoArgollo/talker-manager.git
  
  <br/>
  
  #### 2 Criar .env na pasta / Create .env file on folder
  Chaves que devem ser incluídas / Keys that must be included:
  
    PORT=3000
<br/>

  #### 3 Opções para rodar(escolher 3.1 ou 3.2) / Options to run(choose between option 3.1 and 3.2)
  ##### 3.1 Rodando Localmente / Running Locally
  ###### Requerimentos / Requirements:
   * node.js
  
  ###### Instalando as dependências / Installing dependencies:
  No terminal / On terminal:
  
    npm install

  ###### Inicializando / Starting
  No terminal / On terminal:
  
    npm run dev

  <br />
  
  ##### 3.2 Rodando no Container / Running on Container
  ###### Requisitos / Requirements:
   * Docker
   * Docker-compose
  
  ###### Inicializando / Starting
  No terminal / On terminal:
  
    docker-compose up

<br/>

### Imagens / Images
- /login (POST)
![Login](./assets/login.png)
<br />

- /talker (GET)
![getAll](./assets/getall.png)
<br />

- /talker/{id} (GET)
![getById](./assets/getbyid.png)
<br />

- /talker/search (GET)
![getByParam](./assets/getbyname.png)
<br />

- /talker (POST)
![create](./assets/post.png)
<br />

- /talker/{id} (PUT)
![update](./assets/put.png)
<br />

- /talker/{id} (DELETE)
![delete](./assets/delete.png)
<br />

### :technologist: Author / Autor
<a href="https://www.linkedin.com/in/igormarinhoargollo/">
 <img style="border-radius:300px;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Igor Marinho Argollo</b></sub></a> <a href="https://www.linkedin.com/in/igormarinhoargollo/"></a>
 <br /> <br />

 
  ### :page_facing_up: Licença / License
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"><br><br>
  
