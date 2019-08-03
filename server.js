// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 2223;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');

//Food Collection
var Detail = require('./authentication/app/models/foodDB');
//Collection user
var __User = require('./authentication/app/models/userDB');
//Admin Collection
var __Admin = require('./authentication/app/models/adminDB');

// Our Database
var configDB = require('./authentication/config/database.js');

//Food modules 
require('./back_end/food_info.js')(express, app, multer, bodyParser,path, Detail);

//User info admin panel
require('./back_end/User_info.js')(app, bodyParser, path, __User);

app.use(express.static(__dirname + '/authentication/front_end')); //Access javascript file
app.use(express.static(__dirname + '/admin_panel')); 
app.use(express.static(__dirname + '/user_panel'));
app.use(express.static(__dirname + '/home')); 
app.use(express.static(__dirname + '/uploads')); 
app.use(express.static(__dirname + '/authentication'))
app.set('views', path.join(__dirname, 'views'));
// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./authentication/config/passport')(passport); // pass passport for configuration
require('./authentication/config/passportUser')(passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: '7ba989c93121392970cdefd15853e046',
	saveUninitialized: true,
	resave: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./authentication/app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);