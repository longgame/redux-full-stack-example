'use strict';

var models = require('../models');
var express = require('express');
var router = module.exports = express.Router();

router.all('/session', (req, res) => {
  var out = {
    isAuthenticated: req.isAuthenticated(),
  };
  if (req.isAuthenticated()) {
    out['summary'] = req.user.summary;
  };
  res.json(out);
});
