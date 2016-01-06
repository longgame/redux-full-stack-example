'use strict';

var Umzug = require('Umzug');

var migrate = new Umzug({
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

var seeder = new Umzug({
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
  migrate.pending().then(function(migrations) {
    _.forEach(migrations, function(migration) {
      migrate.up(migration);
    });
  });
});

gulp.task('db:migrate:undo', false, function() {
  migrate.down();
});

gulp.task('db:migrate:flush', false, function() {
  migrate.executed().then(function(migrations) {
    _.first(migrations, function(migration) {
      migrate.down(migration);
    });
  });
});

gulp.task('db:seed', false, function() {
  seeder.pending().then(function(seeds) {
    _.forEach(seeds, function(seed) {
      seeder.up(seed);
    });
  });
});

gulp.task('db:seed:undo', false, function() {
  seeder.down();
});

gulp.task('db:seed:flush', false, function() {
  seeder.pending().then(function(seeds) {
    _.forEachRight(seeds, function(seed) {
      seeder.down(seed);
    });
  });
});

gulp.task('db:flush', false, function() {
  sequence(['db:seed:flush', 'db:migrate:flush']);
});
