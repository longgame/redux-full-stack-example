'use strict';

var helpers = require('../spec-helper');

describe('Index', () => {
  it('GET /', function *() {
    var res = yield request.get('/').end();
    expect(res.status).to.equal(200);
  });
});
