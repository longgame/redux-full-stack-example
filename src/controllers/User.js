'use strict;'

var _ = require('lodash');
var co = require('co');

var models = app.get('models');

exports.create = function (req, res) {
  res.json({ response: 'CREATE' });
};

exports.show = function (req, res) {
  res.json({ response: 'SHOW' });
};

exports.list = function (req, res) {
  co(function *() {
    var Users = yield models.User.findAll();
    res.json(_.map(Users, function (User) {
      return User.summary();
    }));
  });
};

exports.update = function (req, res) {
  res.json({ response: 'UPDATE' });
};
