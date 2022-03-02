var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 

var productsRouter = require('./routes/products');
var customordersRouter = require('./routes/customorders');


var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static('public'));

app.use('/products', productsRouter);
app.use('/customorders', customordersRouter);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send({ msg: "Error" });
  });

module.exports = app;
