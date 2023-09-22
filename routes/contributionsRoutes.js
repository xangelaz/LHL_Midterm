/*
 * All routes for Contributions are defined here
 */

const express = require('express');
const { addContribution, upvoteContribution } = require('../db/queries/contributions');
const router  = express.Router();

router.post('/story/:id', (req, res) => {
  const contents = req.body.contribution;
  const storyId = req.params.id;
  console.log('req.body', req.body)
  addContribution({contents, storyId})
    .then(() => {
      res.redirect(`/story/${storyId}`)
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});
router.post('/:id/upvote', (req, res) => {
  const id = req.params.id;
  upvoteContribution(id)
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
