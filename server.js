'use strict';

// framework referecnes
const path = require('path');

// package references
const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const morgan = require('morgan');
const session = require('express-session');

// app references
const notesRouter = require('./routers/notes-router');

// initialization
const PORT = process.env.port || 8000;

// configure server

const server = express();

// Add static middleware
server.use(express.static(path.join(__dirname, 'public')));

// Configure view engine
server.engine('handlebars', exphbs({ defaultLayout: 'main' }));
server.set('view engine', 'handlebars');

// Add logging middleware
server.use(morgan('combined'));

// Add body parser middleware
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Add session middleware
server.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// Add flash middleware
server.use(flash());

// Add global variables
server.use((request, response, next) => {
    response.locals.SUCCESS_MESSAGE = request.flash('SUCCESS_MESSAGE');
    response.locals.ERROR_MESSAGE = request.flash('ERROR_MESSAGE');
    next();
});

// Add router middleware
server.use('/notes', notesRouter());

// configure default and about routes
server.get('/', (request, response) => {
    response.redirect('/notes');
});
server.get('/about', (request, response) => {
    response.render('about');
});

// start server

server.listen(PORT, () => {
    console.log('Listening on port 8000 ...');
});