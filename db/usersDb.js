const db = require('./connection')
const { query } = require('./connection');

// Get a single user from the database given their id.
// not sure if this function is needed..?
const getUserById = function(id) {
  return query(`
    SELECT *
    FROM users
    WHERE users.id = $1
    `, [id])
    .then((result) => {
      // if no user with the given id is present, returns undefined
      if (!rows.length) {
        return undefined;
        // else resolves with a user object with the given user id
      }
      console.log('getUserById', result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getUserById
};
