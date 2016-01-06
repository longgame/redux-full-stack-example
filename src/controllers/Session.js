'use strict';

exports.show = (req, res) => {
  var out = {
    authenticated: req.isAuthenticated(),
  };
  res.json(out);
};

exports.profile = (req, res) => {
  res.json('OK');
};

exports.updateProfile = (req, res) => {
  res.json('OK');
};
