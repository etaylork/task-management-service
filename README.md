<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A typescript backend server that uses the [Nest](https://github.com/nestjs/nest) framework. This backend service is a task management system that contains a set of web API endpoints that will enable a user to perform CRUD operations against a postgres RDBS.

This project has authentication enabled using Nestjs Passport & JWT.

This project is part of the [nestjs-zero-to-hero](https://www.udemy.com/course/nestjs-zero-to-hero) course on udemy.

## Requirements

- Docker
- Nodejs

## Start Postgres Container

Be sure docker is running on local system. Choose a `POSTGRES_PASSWORD` that you will like to use to access your database. The username will be `POSTGRES`. Once the docker contain is running verify that you can login to the postgres database using a database management GUI.

Below is the command to run the postgres docker container and expose the postgres service on port 5432.

```bash

$ docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=${POSTGRES_PASSWORD} postgres

```

## Installation

```bash
$ npm install
```

## Start Local Dev Environment

Before you can start the local dev environment the user must create a `.env.stage.dev` file in the root of the project. This file is not to be checked into any scm. Below are the following contents that need to go in the file.

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=${POSTGRESS_PASSWORD}
DB_DATABASE=task-management
JWT_SECRET=${JWT_SECRET}
```

- `POSTGRES_PASSWORD`: The password used when creating the postgres container.
- `JWT_SECRET`: Can be set to any secret string value.

```bash
# dev watch mode
$ npm run start:dev
```

Once the above command has been executed then the dev environment should be running on [localhost:3000](http//localhost:3000)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
