'use strict';

global._ = require('lodash');
global.assert = require('chai').assert;
global.expect = require('chai').expect;
global.should = require('chai').should();
global.request = require('supertest');
global.uuid = require('node-uuid');
global.nock = require('nock');

require('mocha');

global.app = require('../app');
request = request(app);

/*
before() {
  console.log("RZA Begin!");
};

after() {
  console.log("JZA Done!");
};
*/
