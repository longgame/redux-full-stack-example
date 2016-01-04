# Express-React Boilerplate

This is a lightweight, feature-complete boilerplate based on Express and React that's useful for full-stack development.

## Quickstart

*Install Dependencies*

```bash
$ npm install
```

*Build assets*

```bash
$ gulp build
$ gulp db:migrate
$ gulp db:seed
```

*Run the test suite*

```bash
$ gulp test
```

*Start the server*

```bash
$ gulp server
```

# Stack

## Backend

* [Express](http://expressjs.com/)
Backend framework for Node.js.
* [Kue](https://github.com/Automattic/kue)
Processing queue for background jobs.
* [Passport](http://passportjs.org/)
Safe, easy, robust authentication for Node.js.
* [Sequelize](http://docs.sequelizejs.com/en/latest/)
Database management for Node.js.

## Frontend

* [React](https://facebook.github.io/react/)
Frontend library developed by Facebook.
* [Redux](http://rackt.org/redux/)
Modern framework for React.
* [Semantic UI](http://semantic-ui.com/)
Lightweight, elegant UIKit.
* [Wix Templates](http://wix.github.io/react-templates/)
Templating engine (alternative to JSX).

## Infrastructure

* [Amazon SES]()
Cheap, reliable email service bundled with AWS.
* [Docker]()
Containerized environment for stanging and production.
* [Postgres]()
Relational database for production.
* [Redis]()
Key-value store.
* [Sqlite3]()
File-system database for development and testing.

## Testing

* [Chai](http://chaijs.com/)
TDD and BDD assetion library.
* [Mocha](https://mochajs.org/)
Test framework for Node.js.