var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session')
var pgSession = require('connect-session-sequelize')(session.Store);
const extendDefaultFields = require('./models/session').extendDefaultFields;
const http = require('http');
var i18n = require("i18n-express");
require('dotenv').config({path:'C:\\Users\\Joe\\OneDrive\\Documents\\PJTAK\\ALLPROJECTFORGIT\\PictureSaver\\.env'})







const pgdb = require('./database/sequelizedb')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var albumRouter = require('./routes/album');
var app = express();

var sessionStore = new pgSession({
  db : pgdb,
  tableName : "session",
  extendDefaultFields : extendDefaultFields,
  expiration:  24 * 60 * 60 * 1000
});

app.use(session({
  secret : process.env.SECRET,
  resave : false,
    saveUninitialized:true,

    store: sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // si tout fwa m ta bezwen itilize yon imaj sou laptop lan

app.use(i18n({
  translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
  siteLangs: ['en', 'pl', 'fr', 'ht'],
  textsVarName: 'translation'
}));




 app.use('/', indexRouter);
app.use('/album', albumRouter)
app.use('/', usersRouter);



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


pgdb.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error ' + err))

app.use((req, res, next) =>{
  console.log(req.session);
  console.log(req.user);
  next();
});


module.exports = app;
