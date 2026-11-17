# Talker Manager API

![Last commit](https://img.shields.io/github/last-commit/IgorMarinhoArgollo/talker-manager)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

🇧🇷 [Leia em português](./README.pt-br.md)

REST API to manage the speakers ("talkers") of an event: login, token-protected CRUD and search. Built during the backend module of Trybe's Full Stack Web Development course.

**🔗 Live API:** [talker-manager-one.vercel.app](https://talker-manager-one.vercel.app/) · **📘 Docs (Swagger):** [/api-docs](https://talker-manager-one.vercel.app/api-docs/)

> **Design note:** as an introduction to backend practices, this project deliberately has no relational database. Data is persisted in a JSON file through Node's `fs` module. A relational version with MySQL is in [store-manager](https://github.com/IgorMarinhoArgollo/store-manager).

![Routes](./assets/rotas.png)

## Features

- `POST /login` issues an access token
- Token-authenticated CRUD for talkers, plus search by name
- Swagger documentation at `/api-docs`
- Security basics: Helmet, rate limiting and centralized error handling
- Docker and Docker Compose setup, ESLint and Husky

## Tech stack

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

Also: Helmet, express-rate-limit, express-rescue and the Node `fs` module.

## API

| Method | Route | Description | Auth |
|---|---|---|---|
| POST | `/login` | Returns an access token | No |
| GET | `/talker` | Lists all talkers | Token |
| GET | `/talker/search` | Searches talkers | Token |
| GET | `/talker/:id` | Gets a talker | Token |
| POST | `/talker` | Creates a talker | Token |
| PUT | `/talker/:id` | Updates a talker | Token |
| DELETE | `/talker/:id` | Deletes a talker | Token |

<details>
<summary>Request examples (screenshots)</summary>

![POST /login](./assets/login.png)
![GET /talker](./assets/getall.png)
![GET /talker/:id](./assets/getbyid.png)
![GET /talker/search](./assets/getbyname.png)
![POST /talker](./assets/post.png)
![PUT /talker/:id](./assets/put.png)
![DELETE /talker/:id](./assets/delete.png)

</details>

## Running locally

```bash
git clone https://github.com/IgorMarinhoArgollo/talker-manager.git
cd talker-manager
```

Create a `.env` file in the project root:

```env
PORT=3000
```

**With Docker:**

```bash
docker-compose up
```

**With Node.js:**

```bash
npm install
npm run dev
```

Open the docs at <http://localhost:3000/api-docs>.

## Author

**Igor Marinho Argollo** · [LinkedIn](https://www.linkedin.com/in/igormarinhoargollo/) · [Portfolio](https://igor-marinho.netlify.app/)

## License

MIT
