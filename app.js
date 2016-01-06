'use strict';

var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');

var config = require('./config/config');

global.app = module.exports = express();

app.use(session({
  secret: process.env.SESSION_SECRET || 'top-secret',
  resave: false,
  saveUninitialized: false,
}));

app.set('root', __dirname);
app.set('config', config);
app.set('view engine', 'jade');
app.set('views', './src/views');
app.set('models', require('./src/models'));
app.set('controllers', require('./src/controllers'));
app.set('database', app.get('models').sequelize);

app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

switch(config.env) {
  case('development'):
  case('test'):
    app.use(logger('dev'));
    break;
  case('production'):
    app.use(logger('combined'));
    break;
}

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

var router = require('./src/routes');
app.use('/', router);
