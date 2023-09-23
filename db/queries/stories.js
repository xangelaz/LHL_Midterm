const db = require('../connection');

// Get all stories.
// to be used when loading the home page.
const getAllStories = function() {
  return db.query(`
    SELECT *
    FROM stories
    ORDER BY stories.id
    `)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Get all stories for a single user (who is the author).
// to be used when clicking "My Stories"
const getStoriesByUserId = function(user_id) {
  return db.query(`
    SELECT stories.*
    FROM stories
    JOIN users ON stories.creator_id = users.id
    WHERE stories.creator_id = $1
    GROUP BY user.id
    ORDER BY stories.id;
    `, [user_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// get all stories for each user.
const getStory = function(user_id) {
  return db.query(`
    SELECT *
    FROM stories
    WHERE id = $1;
    `, [user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Add story to the database.
const addStory = function(story) {
  console.log('story', story)
  return db.query(`
    INSERT INTO stories (creator_id, title, contents)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, [
    1,
    story.title,
    story.contents
  ])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const storyComplete = function(id) {
  return db.query(`
  UPDATE stories
  SET complete = TRUE
  WHERE id = $1
  `, [id])
}

module.exports = {
  getAllStories,
  getStoriesByUserId,
  getStory,
  addStory,
  storyComplete
};

