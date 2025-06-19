# Order Management App

A full-stack order management application built with:

- **Frontend**: Angular
- **Backend**: NestJS
- **Database**: PostgreSQL via TypeORM


## Prerequisites

Before you begin, ensure the following dependencies are installed on your machine:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)


## Local development

1. Setup a Postgre database

```docker run --name order-management-app -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres```

2. Clone the repository

```git clone https://github.com/sandervunk/order-management-app```

3. Install the dependencies

```
cd backend
yarn install
```

```
cd frontend
yarn install
```

4. Run the application

```
cd backend
yarn run start:dev
```

```
cd frontend
yarn run start
```

