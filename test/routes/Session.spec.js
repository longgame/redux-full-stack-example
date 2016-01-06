'use strict';

var helpers = require('../spec-helper');

describe('Session', function() {
  it ('GET /session', function(done) {
    request
      .get('/session')
      .expect(200)
      .end((err, res) => {
        expect(JSON.parse(res.text)).to.have.keys(
          'authenticated'     // FIXME
        );
        done();
      });
  });
});
