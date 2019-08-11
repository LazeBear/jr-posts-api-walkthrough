# jr-posts-api-walkthrough

The purpose of this project is to gain some practical experience on how to build an basic API server with Express.js, by achieving the following tasks:

- build up a basic express server with GET, POST, PUT, DELETE methods

- utilise middleware

- structure the project, so it's more maintainable and clean

_There is no database in this project, memory used to mimic the data storage_

## Live demo

[Web Interface](https://lazebear.github.io/jr-posts/)

[API Docs (Swagger)](https://jr-posts.herokuapp.com/api-docs/)

## Journey begins

### 0. Setup

- create your own project on github

- there are progressive branches for each step listed below, switch to them at your need

### 1. Basic express server

- init the project and install express

```sh

npm init --yes

npm i express

```

- setup an express server

- build up the server with CRUD operations

### 2. Create fake data model

- we don't have database, but we will mock one

### 3. Format our code

- explain a better project structure

- extract common logic to middleware

- extract routes into separate modules

### 4. Understand the ENV variables

- NODE_ENV

- PORT

- [dotenv](https://www.npmjs.com/package/dotenv)

### 5. Other essential packages

- [helmet](https://www.npmjs.com/package/helmet)

- [morgan](https://www.npmjs.com/package/morgan)

- [winston](https://www.npmjs.com/package/winston) (may not covered)

- [cors](https://www.npmjs.com/package/cors)

### 6. Deploy

- [pm2](https://www.npmjs.com/package/pm2)

- [heroku](https://www.heroku.com/)

### 7. Other topics (explore yourself)

- [Swagger](https://editor.swagger.io/)
- [eslint](https://eslint.org/demo/)
