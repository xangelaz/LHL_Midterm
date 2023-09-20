/*
 * All routes for Contributions are defined here
 */

const express = require('express');
const { getAllContributions, addContribution } = require('../db/queries/contributions');
const router  = express.Router();

// to be used when adding a contribution. Loads on the page and gets added to database.
// router.get('/:id', (req, res) => {
//   const storyId = req.params.id;
//   getAllContributions(storyId).then((contributions) => {
//     res.render('story', { contributions })
//   })
// });

