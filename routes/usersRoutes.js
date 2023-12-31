/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { getUserById } = require('../db/queries/users');
const router  = express.Router();

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  getUserById(userId).then((user) => {
    res.render('users', { user })
  })
});

module.exports = router;
