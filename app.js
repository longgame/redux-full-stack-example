'use strict';

var path = require('path');
var express = require('express');

var config = require('./config/config');

global.app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.set('root', __dirname);

app.set('models', require('./src/models'));
app.set('controllers', require('./src/controllers'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.set('database', app.get('models').sequelize);

var router = require('./config/routes');
app.use('/', router);

module.exports = app;
