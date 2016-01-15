'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var routes = require(path.join(__dirname, file));
    router.use(routes);
  });

module.exports = router;
