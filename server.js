// load .env data into process.env
require('dotenv').config();

// load query functions
// const { getAllContributions, addContribution } = require('./db/contributionsDb');
const { getAllStories } = require('./db/queries/stories');

// const { getUserById } = require('./db/usersDb');

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
const contributionsRoutes = require('./routes/contributionsRoutes');
const storiesRoutes = require('./routes/storiesRoutes');
const usersRoutes = require('./routes/usersRoutes');
// const db = require('./db/connection');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/user', usersRoutes);
app.use('/story', storiesRoutes);
app.use('/contributions', contributionsRoutes)

// app.use('/stories', storiesRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// GET ROUTES
app.get('/', (req, res) => {
  getAllStories().then((allStories) => {
    res.render('index', { allStories })
  })
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.get('/my_stories', (req, res) => {
  let newStory = exStory.content
  res.render('my_stories', { newStory });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

