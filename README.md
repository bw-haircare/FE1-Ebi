# Hair Care App

Hair Care is the online destination for beauty & wellness professionals and clients. Professionals can showcase their work, connect with new and existing clients, and build their business. Clients can discover new services and providers, book appointments online, and get inspired.

[API Documentation](https://docs-haircare-now.vercel.app)


## Technologies used:

### General:

NodeJS backend.

ExpressJS framework for the API.

express-session session middleware for managing user state across requests.

### Security

CORS for Cross-Origin configuration.
helmet for basic security adjustments to the server.
bcrypt for encrypting/hashing sensitive user data.

### Testing:

jest
supertest
Database:

knex as the query builder and interface to postgres
pg PostgreSQL

## Installation

`$ npm install`

Required environment variables

These are required to get the server working after install:

``
NODE_ENV - production / development

PORT - For heroku deployment

DATABASE_ENV - testing / developing / production

DATABASE_URL - Production database connection string (used by heroku)

DATABASE_URL_DEV - development database connection string

DATABASE_URL_TEST - testing database connection string

JWT_SECRET - Key for encrypting JWTs``

## Running the server


### production mode
`$ npm run start`

### development mode
`$ npm run start:dev
Developing`

### migrate database to latest
`$ npm run db:latest`

### rollback database migrations
`$ npm run db:rollback`

### seed the database
`$ npm run db:seed`
Testing

### run endpoint tests
`$ npm run test:e2e`

### test coverage
`$ npm run test:cov`

License

This project is MIT licensed
