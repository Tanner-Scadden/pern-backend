const { Sequelize } = require('sequelize-typescript');
require('dotenv').config();

const {
  DB_CONNECTION_DB,
  DB_CONNECTION_USERNAME,
  DB_CONNECTION_PASSWORD,
  DB_CONNECTION_HOST,
} = process.env;

const sequelize = new Sequelize({
  database: DB_CONNECTION_DB,
  username: DB_CONNECTION_USERNAME,
  password: DB_CONNECTION_PASSWORD,
  host: DB_CONNECTION_HOST,
  models: [__dirname + '/models'],
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export default sequelize;
