'use strict';

var models = require('../models');
var express = require('express');
var router = module.exports = express.Router();

var middleware = require('../middleware');
var requireAuth = middleware.Auth.requireAuth;

router.post('/address', requireAuth, (req, res) => {
  co(function *(done) {
    var address = yield models.Address.create({
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
