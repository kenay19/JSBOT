const app = require('express')();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const session = require('express-session');
// Settings 
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,"views"));
app.engine('.hbs',exphbs.engine({
    defaultLayout : 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname : '.hbs',
    helpers: require('./lib/helper')
}));
app.set('view engine','.hbs');
// Middleware

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'production2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
// routes
app.use("/login",require(path.join(__dirname,'routes')));
app.use('/registration',require(path.join(__dirname,'routes/registration.js')));
app.use('/chat',require(path.join(__dirname,'routes/chat.js')));
// public files
app.use(express.static(path.join(__dirname,'public')));
// Initialization 
app.listen(app.get('port'),() => {
    console.log('listening on port ' + app.get('port'));
});