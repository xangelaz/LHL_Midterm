/*
 * All routes for Stories are defined here
 */

const express = require('express');
const { getAllStories, getStoriesByUserId, getStory } = require('../db/queries/stories');
const router  = express.Router();

// Get all stories.
// to be used when loading the home page.
router.get('/', (req, res) => {
  getAllStories().then((allStories) => {
    res.render('index', { allStories })
  })
});

// Get all stories for a single user (who is the author).
// to be used when clicking "My Stories"
router.get('/my_stories/:id', (req, res) => {
  const userId = req.params.id;
  getStoriesByUserId(userId).then((userStories) => {
    res.render('my_stories', { userStories })
  })
});

// .
// to be used when clicking on a story. Redirects to story page.
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  getStory(storyId).then((story) => {
    res.render('story', { story })
  })
});

module.exports = router;
