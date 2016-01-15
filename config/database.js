module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'db.development.sqlite',
    logging: true,
  },
  test: {
    dialect: 'sqlite',
    storage: 'db.test.sqlite',
  },
  production: {
    dialect: 'postgres',
    host: process.env.DB_URL,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  }
};
