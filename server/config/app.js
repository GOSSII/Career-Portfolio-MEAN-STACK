// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

// moddules for node and express
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

// modules for authentication
let session = require('express-session');
let passport = require('passport');

let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// Database Setup
let mongoose = require("mongoose");
let DB = require("./db");

// point Mongoose to the DB URI
mongoose.connect(DB.URI), { useNewUrlParser: true };

let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console, 'Connection Error :'));
mongoDB.once('open', ()=> {
    console.log("Connected to MongoDB...");
})


let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let projectsRouter = require("../routes/projects");
let contactRouter = require('../routes/contact');
let toDoRouter = require("../routes/toDo");


let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors());

// setup express-session
app.use(session({
  secret: "TomRocks",
  saveUninitialized: false,
  resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err, false);
    });
});

passport.use(strategy);
// pasport user configuration

// create a User model
let userModel = require('../models/user');
let User = userModel.User;

// implement a User authetication strategy
passport.use(User.createStrategy());

// serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use("/api/projects",projectsRouter);
app.use('/api/contact',contactRouter);
app.use("/api/todo", passport.authenticate('jwt', {session: false}), toDoRouter);

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '../../public/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
