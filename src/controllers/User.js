'use strict;'

var _ = require('lodash');
var co = require('co');

var models = app.get('models');

exports.create = (req, res) => {
  res.json({ response: 'CREATE' });
};

exports.show = (req, res) => {
  res.json({ response: 'SHOW' });
};

exports.list = (req, res) => {
  co(function *() {
    var Users = yield models.User.findAll();
    res.json(_.map(Users, (User) => {
      return User.summary();
    }));
  });
};

exports.update = (req, res) => {
  res.json({ response: 'UPDATE' });
};
