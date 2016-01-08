'use strict;'

var co = require('co');
var passport = module.exports = require('passport');
var crypto = require('./crypto');
var validate = require('./validate');

var User = app.get('models').User;

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  co(function *() {
    var user = yield User.findOne({
      where: { email: email }
    });
    done(null, user);
  })();
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
      
      if (user && user.checkPassword(password)) {
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
      } else {
        // FIXME: move these into the model
        if (!validate.emailIsValid(email)) {
          done(null, false, {
            message: 'Invalid email'
          });
        }
        if (!validate.passwordIsValid(password)) {
          done(null, false, {
            message: 'Invalid password'
          });
        }

        var user = yield User.create({
          email: email,
          password: password,
        });
        yield user.reload();

        done(null, user);
      }
    } catch(err) {
      done(err, false);
    }
  })();
}));
