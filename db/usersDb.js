const db = require('./connection')

// Get a single user from the database given their id.
// not sure if this function is needed..?
const getUserWithId = function(id) {
  return db(`
    SELECT *
    FROM users
    WHERE users.id = ${id}
    `)
    .then((result) => {
      // if no user with the given id is present, returns undefined
      if (!rows.length) {
        return undefined;
        // else resolves with a user object with the given user id
      }
      console.log('getUserWithId', result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getUserWithId
};
