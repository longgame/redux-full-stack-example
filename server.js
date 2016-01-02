var path = require('path');
var express = require('express');

var app = express();

var config = require('./config/config');

var router = require('./config/routes');
app.use('/', router);

app.use(express.static('public'));
app.use(express.static('dist'));

app.set('views', './src/views');
app.set('view engine', 'jade');

app.listen(3000, () => {
  console.log('Listening on http://%s:%s',
                config.host,
                config.port);
});
