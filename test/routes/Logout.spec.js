'use strict';

var helpers = require('../spec-helper');

describe('Logout', () => {
  beforeEach(function *() {
    yield helpers.user.seed(test_user);
    yield helpers.user.login(test_user);
  });

  it('POST /logout deauthenticate', function *() {
    assert.isTrue(yield helpers.session.isAuthenticated());
    var res = yield request.post('/logout').end();
    expect(res.status).to.equal(200);
    assert.isFalse(yield helpers.session.isAuthenticated());
  });
});
