'use strict';

exports.fetch = function *() {
  var res = yield request.get('/session').end();
  return JSON.parse(res.text);
};

exports.authenticated = function *() {
  var res = yield request.get('/session').end();
  return JSON.parse(res.text).authenticated;
};
