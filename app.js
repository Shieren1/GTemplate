const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const session = require('express-session');
const app = express();

// Set up session
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Serve static files
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Use router for handling routes
app.use('/', routes);

// Log the views directory for debugging
console.log('Views Directory:', app.get('views'));

// Start the server
app.listen(8080, () => {
    console.log('Server initialized on http://localhost:8080');
});
