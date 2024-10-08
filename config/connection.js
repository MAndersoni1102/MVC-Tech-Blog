// Imports the Sequelize constructor from the library.
const Sequelize = require('sequelize');
// Utilizes the dotenv package to set environment variables.
require('dotenv').config();
let sequelize;
// If the app is deployed, it will use the deployed database. Otherwise, it will use the local database.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  // Creates the connection to the database with the environment variables.
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost' ,
      port: process.env.DB_PORT || 3000,
      dialect: 'postgres',
    },
  );
}
module.exports = sequelize;