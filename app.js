const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const minify = require('express-minify');
const sendMail = require("./mail");
const { type } = require('os');
let app = express();


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
		title: "Academics",
		heading:"Academics"
	})
});
app.get("/projects", function(req, res, next) {
	res.render("projects", {
		title: "Projects",
		heading:"My Projects"
	})
});
app.get("/contact", function(req, res, next) {
	res.render("contact", {
		title: "Contact",
		heading:"Contact Me!"
	})
});
app.get("/resume", function(req, res, next) {
	res.render("resume", {
		title: "Résumé",
		heading:"Mon Résumé!"
	})
});
app.get("/jee-notes", function(req, res, next) {
	res.render("jee")
});
// routing end
app.post("/message_send", function(req,res) {
	let {first_name, last_name,subject ,email, message} = req.body;
	console.log("Data Received", req.body);
	subject = "Message from " + first_name + " " + last_name + " with Subject : " + subject;
	message = "Message Received from " + email + '\n' + subject + '\n' + message;
	sendMail(email, subject, message, function(err, data){
		if (err) {
			console.log("Error Encountered");
		} else {
			console.log("Message Sent");
		}
	});
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