'use strict';

var path = require('path');
var express = require('express');
var flash = require('express-flash');
var session = require('express-session');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Redis = require('redis');

var config = require('../config/config');

global.app = module.exports = express();
global.__approot = path.join(__dirname, '..');

app.use(session({
  secret: process.env.SESSION_SECRET || 'top-secret',
  resave: false,
  saveUninitialized: false,
}));

app.set('config', config);

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.set('kue', require('../lib/kue'));

var passport = require('../lib/passport');
app.use(passport.initialize());
app.use(passport.session());

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

app.use(express.static(__dirname + '/../dist'));
app.use(express.static(__dirname + '/../public'));

var router = require('./routes');
app.use('/', router);
