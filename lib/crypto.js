'use strict';

var bcrypt = require('bcrypt');

/*
 * NOTE: We may want to use bcrypt's asynchronous mode.
 * https://www.npmjs.com/package/bcrypt-nodejs
 */

exports.hash = function(input) {
  return bcrypt.hashSync(input, 10);
};

exports.compare = function(input, hash) {
  return bcrypt.compareSync(input, hash);
};
