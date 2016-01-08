'use strict';

var helpers = require('../spec-helper');

describe('Index', () => {
  it('GET /session shows authentication state', function *() {
    var res = yield request.get('/session').end();
    expect(res.status).to.equal(200);
    expect(JSON.parse(res.text)).to.have.all.keys([
      'authenticated'
    ]);
    assert.isFalse(yield helpers.session.authenticated());
  });

  it('GET /session returns user summary when authenticated', function *() {
    yield helpers.user.seed(test_user);
    yield helpers.user.login(test_user);
    var res = yield request.get('/session').end();
    expect(res.status).to.equal(200);
    assert.isTrue(yield helpers.session.authenticated());
    expect(JSON.parse(res.text)).to.have.all.keys([
      'authenticated', 'summary'
    ]);
  });
});
