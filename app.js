require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ApiRouter = require('./routers/api-router')
var cors = require('cors')
var bp = require('body-parser');
const { default: mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(bp.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",ApiRouter)

var port = process.env.PORT || 9000;
app.listen(port,function(){
  console.log(`Server is Running on port ${port}`)
})

mongoose.connect(process.env.MONGO_URI)
.then(resp=>{
  console.log("DB Connected Successfully")
})
.catch(err=>{
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
