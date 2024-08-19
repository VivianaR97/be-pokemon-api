## Data Entities

> **You can find the entities in src/entities/**

## Getting Set Up

Node.js and Docker needs to be installed.

1. Clone this repository.

2. In the repo root directory, run `docker compose build` and then `docker compose up`.

3. Next, also in the repo root directory run `npm run seed:db`, this will seed psql Database. **Warning: This will drop any data stored**.

4. You can start using the API! You will find the swagger documentation on localhost:3001/api-docs

## Technical Notes

- The server is running on localhost port 3001.

- The database is running on localhost:5434
