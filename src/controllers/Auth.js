'use strict;'

var co = require('co');
var passport = exports.passport = require('passport');
var bcrypt = require('bcrypt');

var models = app.get('models');
var User = models.User;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
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
}, function(email, password, done) {
  co(function *() {
    try {
      var user = yield User.findOne({
        where: { email: email }
      });
      if (!user) {
        return null;
      }

      var auth = bcrypt.compareSync(password, user.password);
      return (auth ? user : null);
    } catch(err) {
      // FIXME: Make this a flash message
      console.log('ERROR: %s', err.message);
      return null;
    }
  })
  .then((user) => done(null, user));
}));

exports.login = function(req, res, next) {
  passport.authenticate('login', {}, function(err, user, info) {
    if (err) throw new Error(err);
    if (!user) return res.send(401);
    req.login(user, function(err) {
      return res.json({ response: 'SUCCESS' });
    });
  })(req, res, next);
};

app.use(passport.initialize());
app.use(passport.session());
