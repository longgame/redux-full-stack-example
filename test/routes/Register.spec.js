'use strict';

var helpers = require('../spec-helper');

describe('Register', function() {
  it ('POST /register registers user', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'Test123!',
      })
      .expect(200)
      .end((err, res) => {
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Registration succeeded"
        });
       done();
      });
  });
  
  it ('Throws 409 for duplicate email', function(done) {
    request
      .post('/register')
      .send({
        email: 'test@example.com',
        password: 'Test123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(409)
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Email already registered"
        });
       done();
      });
  });

  it ('Throws 400 for missing credentials', function(done) {
    request
      .post('/register')
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
      .post('/register')
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

  it ('Throws 400 for missing password', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Missing credentials"
        });
        done();
      });
  });
});

describe('Password', function() {
  it ('Requires password to have at least 1 number', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'Test!!!!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password to have at least 1 lower-case letter', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'TEST123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password to have at least 1 upper-case letter', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'test123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password to have at least 1 lower-case letter', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'TEST123!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password to have at least 1 symbol', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'test123',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password be at least 6 characters', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'Te12!',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
  
  it ('Requires password be at most 50 characters', function(done) {
    request
      .post('/register')
      .send({
        email: uuid() + '@example.com',
        password: 'Te12!jklsdvn3289hrp289edsaljkahu9830jfaklh32ruildsfj4',
      })
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text)).to.deep.equal({
          "message": "Invalid password"
        });
        done();
      });
  });
});
