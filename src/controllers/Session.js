'use strict';

exports.show = (req, res) => {
  var out = {
    authenticated: req.isAuthenticated(),
  };
  if (req.isAuthenticated()) {
    out['summary'] = req.user.summary();
  };
  res.json(out);
};

exports.profile = (req, res) => {
  res.json('OK');
};

exports.update = (req, res) => {
  res.json('OK');
};
