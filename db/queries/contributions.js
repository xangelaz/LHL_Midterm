const db = require('../connection');

// Get all contributions for a single story.
// to be used when clicking on each story.
const getAllContributions = function(story_id) {
  return db.query(`
    SELECT contributions.*
    FROM contributions
    JOIN stories ON contributions.story_id = stories.id
    WHERE contributions.story_id = $1
    ORDER BY contributions.id;
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
  console.log('contribution', contribution)
  return db.query(`
    INSERT INTO contributions (contents, story_id, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `, [
    contribution.contents,
    contribution.storyId,
    1
    ])
    .then((result) => {
      console.log('addContribution', result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};

const upvoteContribution = function(id) {
  return db.query(`
  UPDATE contributions
  SET upvotes = upvotes + 1
  WHERE id = $1;
  `, [id])
}

const appendContributionToStory = function(contributionId, storyId) {
  return db.query(`
  UPDATE stories
  SET contents = CONCAT(
    contents,
    ' ',
    (
      SELECT contents FROM contributions WHERE contributions.id = $1
    )
  )
  WHERE stories.id = $2`, [contributionId, storyId]);
}

module.exports = {
  getAllContributions,
  addContribution,
  upvoteContribution,
  appendContributionToStory
};
