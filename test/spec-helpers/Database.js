'use strict';

var Umzug = require('umzug');

var database = Models.sequelize;

exports.flush = function *() {
  return yield database.sync({ force: true });
}
