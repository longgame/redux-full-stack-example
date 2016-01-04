'use strict';

var config = require('./config/config');
var app = require('./app');

app.listen(3000, function() {
  console.log('Listening on http://%s:%s',
                config.host,
                config.port);
});
