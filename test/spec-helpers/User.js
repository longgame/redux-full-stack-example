'use strict;'

var User = app.get('models').User;

global.test_user = {
  email: 'test@example.com',
  password: 'Test123!',
  first_name: 'Test',
  last_name: 'User',
  phone_number: '+12813308004',
  avatar_url: 'http://example.com/icon.png',
};

global.test_admin = {
  email: 'admin@example.com',
  password: 'Test123!',
};

exports.seed = function *(user) {
  return yield User.create(user);
};

exports.register = function *(user) {
  return yield User.create(
    _.pick(user, [ 'email', 'password' ])
  );
};

exports.get = function *(email) {
  return yield User.findOrCreate({
    where: { email: email },
    defaults: { password: test_user.password }
  });
};

exports.flush = function *(email) {
  return yield User.destroy({
    where: { email: email }
  });
};

exports.login = function *(user) {
  return yield request.post('/login')
                      .send(user)
                      .end();
};

exports.logout = function *() {
  return yield request.post('/logout')
                      .end();
};
