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


// newStory retrieves the text box - showing in console.log
// Need newStory to render on the homepage after "Create" is clicked

// commenting out the temporary database below
// ----------------------------------------------->
// // storyDb is temporary database until we connect the real one
// const storyDb = {}
// let id = 0
// // makeId function just increases the id by +1 each time
// function makeId() { return id++ }

// // example story that is in the storyDb
// const exStory = {
//   title: 'Example Story',
//   content: 'Mary had a little lamb',
//   contribution: 'lalala',
//   creatorId: 0,
// };

// storyDb[makeId()] = exStory;

// <--------------------------------------------------

// GET ROUTES
app.get('/', (req, res) => {
  // const allStories = getAllStories();
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

// app.get('/contributions', (req, res) => {
//   // the below line works but is hardcoded to just show the same story(exStory)
//   let newStory = exStory.content
//   let storyContribution = exStory.contribution

//   // console.log('newStory:', newStory);
//   res.render('contributions', {newStory, storyContribution});
// });

// POST ROUTES

// Need POST route for when a user creates a new story
// Should refresh and see the new story listed

// app.post('/new', (req, res) => {
//   let newStory = { content: req.body.story };
//   // console.log('newStory:', newStory);
//   storyDb[makeId()] = newStory;
//   res.redirect('/');
// });

// // added post route for when you make a contribution
// app.post('/contributions', (req, res) => {
//   const contribution = req.body.contribution;
//   exStory.contribution  = contribution;
//   const newStory = exStory.content;
//   res.render('contributions', { newStory, storyContribution: exStory.contribution});
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

