const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app

app.listen(8080, ()=>{
    console.log('server initialized on http://localhost:8080')
})