'use strict;'

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
