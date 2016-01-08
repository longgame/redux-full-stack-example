'use strict;'

var _ = require('lodash');
var co = require('co');

var User = app.get('models').User;

exports.create = (req, res) => {
  res.sendStatus(404);
};

exports.show = (req, res) => {
  res.sendStatus(404);
};

exports.list = (req, res) => {
  co(function *(cb) {
    var Users = yield User.findAll();
    
    res.json(_.map(Users, (user) => {
      return user.summary;
    }));
  })();
};

exports.update = (req, res) => {
  res.sendStatus(404);
};
