// load .env data into process.env
require('dotenv').config();

// Connect to PostgreSQL
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lhl_midterm'
});

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


// newStory retrieves the text box - showing in console.log
// Need newStory to render on the homepage after "Create" is clicked
const exStory = {
  story1: 'Mary had a little lamb',
  user: 'Naruto',
};

// GET ROUTES
app.get('/', (req, res) => {
  res.redirect('/homepage');
});

app.get('/homepage', (req, res) => {
  const newStory = req.body.story;
  res.render('index', { newStory });
});

app.get('/homepage/new', (req, res) => {
  res.render('homepage_new');
});

app.get('/my_stories', (req, res) => {
  res.render('my_stories');
});

app.get('/contributions', (req, res) => {
  const newStory = {
    exStory,
  }
  console.log(newStory);
  res.render('contributions', newStory );
});


// POST ROUTES

// Need POST route for when a user creates a new story
// Should refresh and see the new story listed

app.post("/homepage", (req, res) => {
  const newStory = req.body.story;
  // console.log('newStory:', newStory);
  res.render('index', { newStory });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

