'use strict;'

var co = require('co');
var passport = require('passport');

var models = require(path.join(__approot, 'src/models'));
var User = models.User;

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
