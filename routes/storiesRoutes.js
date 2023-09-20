/*
 * All routes for Stories are defined here
 */

const express = require('express');
const { getAllStories } = require('../db/queries/stories');
const router  = express.Router();

// get all stories on home page
router.get('/', (req, res) => {
  getAllStories().then((allStories) => {
    console.log("routes", allStories)
    res.render('index', { allStories })
  })
});

module.exports = router;
