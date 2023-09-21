// const { query } = require('./connection');

// // Get all stories.
// // to be used when loading the home page.
// const getAllStories = function() {
//   return query(`
//     SELECT title, contents
//     FROM stories
//     ORDER BY stories.date_created
//     `)
//     .then((result) => {
//       console.log('getAllStories', result.rows);
//       return result.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// // Get all stories for a single user (who is the author).
// // to be used when clicking "My Stories"
// const getUserStoriesWithId = function(user_id) {
//   return query(`
//     SELECT stories.*
//     FROM stories
//     JOIN users ON stories.creator_id = users.id
//     WHERE stories.creator_id = $1
//     GROUP BY user.id
//     ORDER BY stories.created_date;
//     `, [user_id])
//     .then((result) => {
//       console.log('getUserStoriesWithId', result.rows);
//       return result.rows;
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// const addStory = function(story) {
//   return query(`
//     INSERT INTO stories (creator_id, title, contents, date_created, complete)
//     VALUES ($1, $2, $3, $4, $5, $6)
//     RETURNING *;
//   `, [
//     story.creator_id,
//     story.title,
//     story.contents,
//     story.date_created,
//     story.complete
//   ])
//     .then((result) => {
//       console.log('addStory', result.rows[0]);
//       return result.rows[0];
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// };

// module.exports = {
//   getAllStories,
//   getUserStoriesWithId,
//   addStory
// };
