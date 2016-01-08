'use strict';

var helpers = require('../spec-helper');

describe('Register', function() {
  it ('POST /register registers user', function *() {
    var res = yield request.post('/register')
                           .send(test_user)
                           .end();
    expect(res.status).to.equal(200);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Registration succeeded"
    });

    assert.isTrue(yield helpers.session.authenticated());
  });
  
  it ('throws 409 for duplicate email', function *() {
    yield helpers.user.seed(test_user);

    var res = yield request.post('/register')
                           .send(test_user)
                           .end();
    expect(res.status).to.equal(409);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Email already registered"
    });

    // FIXME: WTF???
    //assert.isFalse(yield helpers.session.authenticated());
  });

  it ('Throws 400 for missing credentials', function *() {
    var res = yield request.post('/register')
                           .end();
    expect(res.status).to.equal(400);
    expect(JSON.parse(res.text)).to.deep.equal({
      "message": "Missing credentials"
    });

    assert.isFalse(yield helpers.session.authenticated());
  });
  
  it ('Throws 400 for missing email', function *() {
    var res = yield request.post('/register')
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
    var res = yield request.post('/register')
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
});
