# raid-challenge

## Clone the Project

- Clone `git clone https://github.com/jteohn/raid-challenge.git`
- Change directory to BE and run command to install npm `npm i`
- Change directory to FE and run command to install npm `npm i`

## Setup backend

Create .env file and modify the properties according to your local environment configuration

- Run the following commands once to setup Sequelize

```bash

npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

- Run the BE server

`node index.js`

## Setup frontend

Create .env file and modify the properties according to your local environment configuration

- Run the FE web client

`npm start`
