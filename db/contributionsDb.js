const db = require('./connection')

// Get all contributions for a single story.
// to be used when clicking on each story.
const getAllContributions = function(story_id) {
  return db(`
    SELECT contributions.*
    FROM contributions
    JOIN stories ON contributions.story_id = stories.id
    WHERE contributions.story_id = $1
    GROUP BY stories.id
    ORDER BY stories.created_date;
    `, [story_id])
    .then((result) => {
      console.log('getAllContributions', result.rows);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Add a contribution to the database.
const addContribution = function(contribution) {
  return db(`
    INSERT INTO contributions (contents, date_created, upvotes, accepted, story_id, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `, [
    contribution.contents,
    contribution.date_created,
    contribution.upvotes,
    contribution.accepted,
    contribution.story_id,
    contribution.user_id
  ])
    .then((result) => {
      console.log('addContribution', result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllContributions,
  addContribution
};

