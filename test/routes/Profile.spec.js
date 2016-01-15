'use strict';

var helpers = require('../spec-helper');

describe('Profile', () => {
  it('GET /profile returns user profile', function *() {
    yield helpers.user.seed(test_user);
    yield helpers.user.login(test_user);

    var res = yield request.get('/profile').end();
    expect(res.status).to.equal(200);
    expect(JSON.parse(res.text)).to.have.keys([
      'first_name', 'last_name', 'email', 'avatar_url', 'phone_number'
    ]);
    expect(JSON.parse(res.text)).to.deep.equal(
      _.omit(test_user, 'password')
    );
  });

  it('GET /profile throws 401 for unauthenticated requests', function *() {
    var res = yield request.get('/profile').end();
    expect(res.status).to.equal(401);
  });

  it('POST /profile updates a user', function *() {
    yield helpers.user.seed(test_user);
    yield helpers.user.login(test_user);

    var profile = _.defaults({
      first_name: 'New',
      last_name: 'Name',
      avatar_url: 'http://example.com/icon2.png',
      random_data: 'abcdefgxyz123'
    }, test_user);

    var res = yield request.post('/profile')
                           .send(profile)
                           .end();
    expect(res.status).to.equal(200);
    expect(JSON.parse(res.text)).to.have.keys([
      'first_name', 'last_name', 'email', 'avatar_url', 'phone_number'
    ]);
    expect(JSON.parse(res.text)).to.deep.equal(
      _.omit(profile, ['password', 'random_data'])
    );
  });

  it('POST /profile throws 401 for unauthenticated requests', function *() {
    var res = yield request.post('/profile').end();
    expect(res.status).to.equal(401);
  });
});
