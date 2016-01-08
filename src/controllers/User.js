'use strict;'

var _ = require('lodash');
var co = require('co');

var User = app.get('models').User;

exports.create = (req, res) => {
  res.json({ response: 'CREATE' });
};

exports.show = (req, res) => {
  res.json({ response: 'SHOW' });
};

exports.list = (req, res) => {
  co(function *(cb) {
    var Users = yield User.findAll();
    cb(_.map(Users, (User) => {
      return User.summary();
    }));
  })((data) => {
    res.json(data);
  });
};

exports.update = (req, res) => {
  res.json({ response: 'UPDATE' });
};
