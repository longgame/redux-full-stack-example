'use strict';

/*
 * Username: test@example.com
 * Password: Test123!
 */
module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Users', [
      { email: 'test@example.com',
        password: '$2a$10$J.8pRaGbFVjjmm9WObq6YeHF0wHn5NlrfCDmtD7SMI9T9.sLL.t1e',
        first_name: 'Test',
        last_name: 'User',
        createdAt:new Date(),
        updatedAt:new Date() },
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [
      { email: 'test@example.com' },
    ]);
  }
};
