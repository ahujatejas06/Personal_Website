var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var minify = require('express-minify');
var app = express();


// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//middleware to compress CSS
app.use(minify({
	cache: false,
	uglifyJsModule: null,
	errorHandler: null,
	jsMatch: false,
	cssMatch: /css/,
	jsonMatch: false,
	sassMatch: false,
	lessMatch: false,
	stylusMatch: false,
	coffeeScriptMatch: false,
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// routing start
app.get("/", function(req, res, next) {
	res.render("index", {
		title: "Home"
	})
});
app.get("/academics", function(req, res, next) {
	res.render("academics", {
		title: "Academics"
	})
});
// routing end
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