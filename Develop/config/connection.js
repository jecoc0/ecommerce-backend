require('dotenv').config();

// constructor so we can use new - create a new instance using this constructor
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
// shorthand for an if/else if JAWSDB_URL exists, 
// use what is after the question mark
// else, use what is after the colon
// this is referred to as ternary operator
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
