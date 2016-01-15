'use strict';

var helpers = require('../spec-helper');

describe('Address', () => {
  it('POST /address adds a new billing address to the user', function *() {
    yield helpers.user.seed(test_user);
    yield helpers.user.login(test_user);

    var res = yield request.post('/address').end();
    expect(res.status).to.equal(200);
    console.log("RESP", res.text);
  });
  
  it('POST /address throws a 401 if not authenticated', function *() {
    var res = yield request.post('/address').end();
    expect(res.status).to.equal(401);
  });
});
