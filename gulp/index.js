'use strict;'

global._ = require('lodash');
global.fs = require('fs');
global.path = require('path');
global.gulp = require('gulp-help')(require('gulp'));
global.sequence = require('run-sequence');
global.app = require('../app');

fs.readdirSync( path.join(__dirname, 'tasks') )
  .filter( function(file) { return /\.jsx?$/.test(file); } )
  .forEach( function(task) {
    require(path.join(__dirname, 'tasks', task));
  });

gulp.task('default', false, function() {
  sequence( ['help'] );
});
