'use strict;'

// app is already global, but this makes things clearer
global.app = require('../app');

var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp');

fs.readdirSync( path.join(__dirname, 'tasks') )
  .filter( function(file) { return /\.jsx?$/.test(file); } )
  .forEach( function(task) {
    require(path.join(__dirname, 'tasks', task));
  });

gulp.task('default', function() {
  // FIXME
});
