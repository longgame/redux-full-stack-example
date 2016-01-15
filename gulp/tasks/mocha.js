'use strict;'

gulp.task('mocha', false, shell.task([
  'NODE_ENV=test mocha --harmony test/**/*.spec.js'
]));
