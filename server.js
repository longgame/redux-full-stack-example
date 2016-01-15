'use strict';

var app = require('./src');

app.listen(3000, (err) => {
  console.log('Listening on http://%s:%s',
                app.get('config').host,
                app.get('config').port);
});
