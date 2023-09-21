/*
 * All routes for Stories are defined here
 */

const express = require('express');
const { getAllStories, getStoriesByUserId, getStory } = require('../db/queries/stories');
const { getAllContributions, addContribution } = require('../db/queries/contributions');
const db = require('../db/connection');
const router  = express.Router();
const database = require('../db/queries/contributions');


// Get all stories.
// to be used when loading the home page.
router.get('/', (req, res) => {
  getAllStories().then((allStories) => {
    res.render('index', { allStories })
  })
});

// Not actually required - can revisit this if we have time
// get all stories for a single user (who is the author).
// to be used when clicking "My Stories"
router.get('/my_stories/:id', (req, res) => {
  const userId = req.params.id;
  getStoriesByUserId(userId).then((userStories) => {
    res.render('my_stories', { userStories })
  })
});

// Gets story and all contributions for that story.
// to be used when clicking on a story. Redirects to story page.
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  getStory(storyId).then((story) => {
    getAllContributions(storyId).then((contributions) => {
      console.log('contributions', contributions)
      res.render('story', { story, contributions })
    })
  })
});

module.exports = router;
