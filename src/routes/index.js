'use strict';

var _ = require('lodash');
var router = module.exports = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/ping', (req, res) => {
  res.json({ response: 'pong' });
});

var controllers = app.get('controllers');

router.post('/register', controllers.Auth.register);
router.post('/login', controllers.Auth.login);
router.post('/logout', controllers.Auth.logout);

router.all('/session', controllers.Session.show);
router.get('/profile', controllers.Session.profile);
router.post('/profile', controllers.Session.update);

router.get('/admin/users', controllers.User.list);
router.get('/admin/user/:id', controllers.User.show);
router.post('/admin/user/:id', controllers.User.update);
