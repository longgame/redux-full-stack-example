'use strict';

var _ = require('lodash');
var router = module.exports = require('express').Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/ping', function (req, res) {
  res.json({ response: 'pong' });
});

var controllers = app.get('controllers');

router.post('/login', controllers.Auth.login);
//router.post('/register', controllers.Auth.register);

router.get('/user/:id', controllers.User.show);
router.get('/users', controllers.User.list);

router.get('/profile', controllers.Session.profile);
router.post('/profile', controllers.Session.updateProfile);
