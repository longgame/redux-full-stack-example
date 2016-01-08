'use strict';

var _ = require('lodash');
var router = module.exports = require('express').Router();

var middleware = require('../middleware');
var requireAuth = middleware.Auth.requireAuth;
var requireAdmin = middleware.Auth.requireAdmin;

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/ping', (req, res) => {
  res.json({ response: 'pong' });
});

var controllers = app.get('controllers');

// Auth
router.post('/register', controllers.Auth.register);
router.post('/login', controllers.Auth.login);
router.post('/logout', controllers.Auth.logout);

// Session
router.all('/session', controllers.Session.show);
router.get('/profile', requireAuth, controllers.Session.profile);
router.post('/profile', requireAuth, controllers.Session.update);

// User
router.get('/admin/users', controllers.User.list);
router.get('/admin/user/:id', controllers.User.show);
router.post('/admin/user/:id', controllers.User.update);
