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

gulp.task('db:migrate', function() {
  migrate.pending().then(function(migrations) {
    _.forEach(migrations, function(migration) {
      migrate.up(migration);
    });
  });
});

gulp.task('db:migrate:undo', function() {
  migrate.down();
});

gulp.task('db:migrate:undo:all', function() {
  migrate.executed().then(function(migrations) {
    _.forEachRight(migrations, function(migration) {
      migrate.down(migration);
    });
  });
});

gulp.task('db:seed', function() {
  seeder.pending().then(function(seeds) {
    _.forEach(seeds, function(seed) {
      seeder.up(seed);
    });
  });
});

gulp.task('db:seed:undo', function() {
  seeder.down();
});

gulp.task('db:seed:undo:all', function() {
  seeder.pending().then(function(seeds) {
    _.forEachRight(seeds, function(seed) {
      seeder.down(seed);
    });
  });
});

gulp.task('db:flush:seed', function() {
  sequence(['db:seed:undo:all']);
});

gulp.task('db:flush:migrate', function() {
  sequence(['db:migrate:undo:all']);
});

gulp.task('db:flush', function() {
  sequence(['db:flush:seed', 'db:flush:migrate']);
});
