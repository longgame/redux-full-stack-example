'use strict';

var Umzug = require('umzug');

var Database = app.get('database');

var Migrate = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: Database
  },
  migrations: {
    path: path.join(app.get('root'), 'db/migrate'),
    params: [ Database.getQueryInterface(),
              app.get('models').Sequelize ]
  }
});

var Seed = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: Database
  },
  migrations: {
    path: path.join(app.get('root'), 'db/seed'),
    params: [ Database.getQueryInterface(),
              app.get('models').Sequelize ]
  }
});

exports.migrate = function *() {
  var res = yield Migrate.pending();
  _.forEach(res, function(item) {
    Migrate.up(item);
  });
  return;
};

exports.seed = function *() {
  var res = yield Seed.pending();
  _.forEach(res, function(item) {
    Seed.up(item);
  });
  return;
}; 

exports.flush = function *() {
  return yield Database.sync({ force: true });
}
