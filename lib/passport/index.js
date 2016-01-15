'use strict;'

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);

var co = require('co');
var passport = module.exports = require('passport');

var models = require(path.join(__approot, 'src/models'));
var User = models.User;

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

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    require(path.join(__dirname, file));
  });
