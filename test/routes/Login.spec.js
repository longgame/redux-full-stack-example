'use strict';

var helpers = require('../spec-helper');

describe('Login', () => {
  beforeEach(function *() {
    yield helpers.user.seed(test_user);
  });

  it('POST /login authenticates as user', function *() {
    var res = yield request.post('/login')
                           .send(test_user)
                           .end();
    expect(res.status).to.equal(200);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Login succeeded"
    });

    assert.isTrue(yield helpers.session.authenticated());
  });

  it ('Throws 400 for missing credentials', function *() {
    var res = yield request.post('/login')
                           .end();
    expect(res.status).to.equal(400);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Missing credentials"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
  
  it ('Throws 400 for missing email', function *() {
    var res = yield request.post('/login')
                           .send({
                             email: test_user.email,
                           })
                           .end();
    expect(res.status).to.equal(400);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Missing credentials"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
  
  it ('Throws 400 for missing password', function *() {
    var res = yield request.post('/login')
                           .send({
                             password: test_user.password,
                           })
                           .end();
    expect(res.status).to.equal(400);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Missing credentials"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
  
  it ('Throws 401 for invalid email', function *() {
    var res = yield request.post('/login')
                           .send({
                             email: 'test@invalid.com',
                             password: test_user.password,
                           })
                           .end();
    expect(res.status).to.equal(401);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Invalid username or password"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
  
  it ('Throws 401 for invalid password', function *() {
    var res = yield request.post('/login')
                           .send({
                             email: test_user.email,
                             password: 'invalid',
                           })
                           .end();
    expect(res.status).to.equal(401);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Invalid username or password"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
});
