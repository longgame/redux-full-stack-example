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

var models = app.get('models');
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

var Address = app.get('models').Address;

// Address
router.post('/address', requireAuth, (req, res) => {
  co(function *(done) {
    var address = yield Address.create({
      address1: '1600 Pennsylvania Ave.',
      state: 'DC',
      country: 'US',
      postal_code: '20500'
    });
    req.user.addAddress(address);
    
    res.json({
      current_user: req.user.id
    });
  })();
});
