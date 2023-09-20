// PG database client/connection setup
// Connect to PostgreSQL
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();

// create and export query to be used in database.js
// const query = (text, params, callback) => {
//   return pool.query(text, params, callback);
// };

// module.exports = { query };

module.exports = db;
