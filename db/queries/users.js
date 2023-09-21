const db = require('../connection');

const getUserById = (id) => {
  return db.query(`SELECT * FROM users where id= $1;`, [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUserById };
