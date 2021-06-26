var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongo = require('mongoose')



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var projectRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about',aboutRouter);
app.use('/contact', contactRouter);
app.use('/projects',projectRouter);

// connect to mongo

const connectionString = 'mongodb+srv://admin:js2021Sum@cluster0.tqxkx.mongodb.net/comp2068'
mongo.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    (message)=>{
      console.log('Connected Successfully')
    }
).catch((err)=>{
  console.log(err)
})


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
