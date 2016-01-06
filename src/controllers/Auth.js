'use strict;'

var co = require('co');
var passport = exports.passport = require('passport');
var bcrypt = require('bcrypt');

app.use(passport.initialize());
app.use(passport.session());

var models = app.get('models');
var User = models.User;

var authHelpers = require('../helpers/Auth');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  co(function *() {
    var user = yield User.findOne({
      where: { id: id }
    });
    done(null, user);
  });
});

var LocalStrategy = require('passport-local').Strategy;

passport.use('login', new LocalStrategy({
  usernameField: 'email',
}, (email, password, done) => {
  co(function *() {
    try {
      var user = yield User.findOne({
        where: { email: email }
      });
      
      if (user && bcrypt.compareSync(password, user.password)) {
        done(null, user);
      } else {
        done(null, false, {
          message: 'Invalid username or password'
        });
      }
    } catch(err) {
      done(err, false);
    }
  })();
}));

passport.use('register', new LocalStrategy({
  usernameField: 'email',
}, (email, password, done) => {
  co(function *() {
    try {
      var user = yield User.findOne({
        where: { email: email }
      });
      if (user) {
        done(null, false, {
          message: 'Email already registered'
        });
      }

      if (!authHelpers.isValidPassword(password)) {
        done(null, false, {
          message: 'Invalid password'
        });
      }

      var user = yield User.create({
        email: email,
        password: bcrypt.hashSync(password, 10),
      });
      yield user.reload();

      done(null, user);
    } catch(err) {
      done(err, false);
    }
  })();
}));

exports.login = (req, res) => {
  passport.authenticate('login', {}, (err, user, info) => {
    if (err) throw new Error(err);
    if (!user) {
      res.status(401);
      if (info && info.message)
        switch(info.message) {
          case 'Missing credentials':
            res.status(400);
            break;
        }
      res.send(info);
    }

    req.login(user, (err) => {
      return res.send({ message: 'Login succeeded' });
    });
  })(req, res);
};

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
      return res.send({ message: 'Registration succeeded' });
    });
  })(req, res);
};
