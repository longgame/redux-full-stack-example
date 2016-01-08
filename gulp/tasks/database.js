'use strict';

var Umzug = require('Umzug');

var Migrate = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: app.get('database')
  },
  migrations: {
    path: path.join(app.get('root'), 'db/migrate'),
    params: [ app.get('database').getQueryInterface(),
              app.get('models').Sequelize ]
  }
});

var Seed = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: app.get('database')
  },
  migrations: {
    path: path.join(app.get('root'), 'db/seed'),
    params: [ app.get('database').getQueryInterface(),
              app.get('models').Sequelize ]
  }
});

gulp.task('db:help', 'List database commands.', function() {
  // FIXME
});

gulp.task('db', false, function() {
  sequence(['db:help']);
});

gulp.task('db:migrate', false, function() {
  Migrate.pending().then(function(migrations) {
    _.forEach(migrations, function(migration) {
      Migrate.up(migration);
    });
  });
});

gulp.task('db:migrate:undo', false, function() {
  Migrate.down();
});

gulp.task('db:migrate:flush', false, function() {
  Migrate.executed().then(function(migrations) {
    _.first(migrations, function(migration) {
      Migrate.down(migration);
    });
  });
});

gulp.task('db:seed', false, function() {
  Seed.pending().then(function(seeds) {
    _.forEach(seeds, function(seed) {
      Seed.up(seed);
    });
  });
});

gulp.task('db:seed:undo', false, function() {
  Seed.down();
});

gulp.task('db:seed:flush', false, function() {
  Seed.executed().then(function(seeds) {
    _.forEachRight(seeds, function(seed) {
      Seed.down(seed);
    });
  });
});

gulp.task('db:flush', false, function() {
  sequence(['db:seed:flush', 'db:migrate:flush']);
});
