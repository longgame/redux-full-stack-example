'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var db        = {};

var _ = require('lodash');

var config = app.get('config');

var Kue = require('kue');
var kue = module.exports = Kue.createQueue({
  prefix: config.name || 'kue',
  redis: config.redis || 'redis://localhost:6379',
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var mod = require(path.join(__dirname, file));
    db[mod.name || file.slice(0, -3)] = mod;
  });

_.each(db, (job, name) => {
  kue.process(name, job);
});
