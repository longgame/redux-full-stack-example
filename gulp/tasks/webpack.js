'use strict;'

var webpack = require('webpack'),
    devServer = require('webpack-dev-server');

var webpackConfig = require('../../webpack.config.js');

gulp.task('webpack', false, function(cb) {
  webpack(webpackConfig, function(err, data) {
    if (err) throw new Error(err.message);
    // FIXME: Do something with data
    cb();
  });
});

gulp.task('webpack:devserver', false, function() {
  webpackConfig.entry.app.unshift(
    "webpack-dev-server/client?http://localhost:9000",
    "webpack/hot/dev-server"
  );

  new devServer(webpack(webpackConfig), {
    contentBase: '../../public',
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    }
  }).listen(9000, 'localhost', function(err, data) {
    if (err) {
      throw new Error(err.message);
    }
    console.log("Listening on http://localhost:9000");
  });
});
