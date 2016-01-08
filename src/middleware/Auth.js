'use strict';

exports.requireAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
};

exports.requireAdmin = (req, res, next) => {
  // FIXME
};
