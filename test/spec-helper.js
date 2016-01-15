'use strict';

global._ = require('lodash');
global.util = require('util');
global.async = require('async');
global.fs = require('fs');
global.path = require('path');
global.mutex = require('locks').createMutex();
global.uuid = require('node-uuid');

var chai = require('chai');
global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should();

global.co = require('co');
global.sleep = require('co-sleep');

global.__approot = path.join(__dirname, '..');
global.app = require(path.join(__approot, 'src'));

global.Models = require(path.join(__approot, 'src/models'));

global.request = require('co-supertest').agent(app.listen());
global.nock = require('nock');

require('co-mocha');

var dbHelper = require('./spec-helpers/Database');
exports.database = dbHelper;
exports.db = dbHelper;

var userHelper = require('./spec-helpers/User');
exports.user = userHelper;

var sessionHelper = require('./spec-helpers/Session');
exports.session = sessionHelper;

var tsSuite, tsTest;

before(function *() {
  console.log("--- Begin Test Suite ---");
  tsSuite = Date.now();
});

beforeEach(function *() {
  yield dbHelper.flush();
  tsTest = Date.now();
});

afterEach(function *() {
  console.log("--- Finished Unit Test (%s) ---", Date.now()-tsTest);
  if (yield sessionHelper.isAuthenticated())
    yield userHelper.logout();
});

after(function *() {
  console.log("--- End Test Suite (%s) ---", Date.now()-tsSuite);
});
