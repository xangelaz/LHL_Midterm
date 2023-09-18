// PG database client/connection setup
const { Pool } = require('pg');
// const dotenv = require('dotenv');
// dotenv.config();

// const dbParams = async () => {
//   try {
//     const pool = new Pool({
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//     });
//   await pool.connect()
//   const res = pool.query('SELECT * FROM users')
//   console.log(res)
//   await pool.end()
// } catch (error) {
//   console.log(error);
// }
// }

// const db = new Pool(dbParams);

// db.connect();

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lhl_midterm'
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports =  { query };
