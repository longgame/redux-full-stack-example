'use strict;'

var co = require('co');
var passport = require('passport');

var models = require(path.join(__approot, 'src/models'));
var User = models.User;

var LocalStrategy = require('passport-local').Strategy;

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
