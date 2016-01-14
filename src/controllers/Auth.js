'use strict';

var passport = require('passport');

exports.register = (req, res) => {
  passport.authenticate('register', {}, (err, user, info) => {
    if (err) throw new Error(err);
    if (!user) {
      res.status(409);
      if (info && info.message)
        switch(info.message) {
          case 'Missing credentials':
          case 'Invalid email':
          case 'Invalid password':
            res.status(400);
            break;
        }
      res.send(info);
    }
    
    // FIXME: Dispatch verification email

    req.login(user, (err) => {
      return res.send({
        message: 'Registration succeeded'
      });
    });
  })(req, res);
};

exports.login = (req, res) => {
  passport.authenticate('login', {}, (err, user, info) => {
    if (err) throw new Error(err);
    if (user) {
      req.login(user, (e) => {
        if (e) throw new Error(e);
        res.send({ message: 'Login succeeded' });
      });
    } else {
      res.status(401);
      if (info && info.message)
        switch(info.message) {
          case 'Missing credentials':
            res.status(400);
            break;
        }
      res.send(info);
    }
  })(req, res);
};

exports.logout = (req, res) => {
  req.logout();
  res.send({ message: 'Logout succeeded' });
};
