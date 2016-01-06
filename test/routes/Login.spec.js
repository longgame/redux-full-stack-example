'use strict';

var helpers = require('../spec-helper');

describe('Login', function() {
  it ('POST /login authenticates as user', function(done) {
    request
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'Test123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Login succeeded"
        });
       done();
      });
  });

  it ('Throws 400 for missing credentials', function(done) {
    request
      .post('/login')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Missing credentials"
        });
        done();
      });
  });

  it ('Throws 400 for missing email', function(done) {
    request
      .post('/login')
      .send({
        email: 'test@example.com',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Missing credentials"
        });
        done();
      });
  });

  it ('Throws 400 for missing password', function(done) {
    request
      .post('/login')
      .send({
        password: 'Test123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Missing credentials"
        });
        done();
      });
  });

  it ('Throws 401 for invalid user', function(done) {
    request
      .post('/login')
      .send({
        email: 'test@invalid.com',
        password: 'Test123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid username or password"
        });
        done();
      });
  });

  it ('Throws 401 for invalid password', function(done) {
    request
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'invalid',
      })
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid username or password"
        });
        done();
      });
  });
});
