/*
 * All routes for Stories are defined here
 */

const express = require('express');
const { getAllStories, getStoriesByUserId, getStory, addStory, storyComplete } = require('../db/queries/stories');
const { getAllContributions } = require('../db/queries/contributions');
const router  = express.Router();


// Get all stories.
// to be used when loading the home page.
router.get('/', (req, res) => {
  getAllStories().then((allStories) => {
    res.render('index', { allStories })
  })
});

// Gets story and all contributions for that story.
// to be used when clicking on a story. Redirects to story page.
router.get('/:id', (req, res) => {
  const storyId = req.params.id;
  getStory(storyId).then((story) => {
    getAllContributions(storyId).then((contributions) => {
      res.render('contributions', { story, contributions })
    })
  })
});

// Adds a new story to database and redirects to home page.
router.post('/', (req, res) => {
  const contents = req.body.story;
  const title = req.body.title;
  addStory({contents, title})
    .then((story) => {
      res.redirect('/')
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

// Change complete status of story after Complete Story button click
router.post('/:id/status', (req, res) => {
  const id = req.params.id;
  console.log('post for id/status', req.params.id)
  storyComplete(id)
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
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
module.exports = router;
