'use strict;'

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence(['webpack']);
});
