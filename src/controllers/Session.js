'use strict';

exports.profile = function(req, res) {
  res.json({ response: 'PROFILE' });
};

exports.updateProfile = function(req, res) {
  res.json({ response: 'UPDATE PROFILE' });
};
