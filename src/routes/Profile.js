'use strict';

var models = require('../models');
var express = require('express');
var router = module.exports = express.Router();

var middleware = require('../middleware');
var requireAuth = middleware.Auth.requireAuth;

router.get('/profile', requireAuth, (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user.profile);
  } else {
    res.sendStatus(403);
  }
});

router.post('/profile', requireAuth, (req, res) => {
  if (req.isAuthenticated()) {
    co(function *() {
      var fields = _.pick(req.body, [
            'first_name',
            'last_name',
            'email',
            'avatar_url',
            'phone_number',
          ]);
      yield req.user.update(fields);
      res.json(req.user.profile);
    })();
  } else {
    res.sendStatus(403);
  }
});
