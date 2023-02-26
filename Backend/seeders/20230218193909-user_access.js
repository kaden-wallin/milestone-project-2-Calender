'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_access', [
      {
        user_ID: 2,
        user_email: 'FakeEmail@notreal.com',
        user_password: '123456'
      },
      {
        user_ID: 1,
        user_email: 'NOTaREALemail@notreal.com',
        user_password: '43984945'
      },
      {
        user_ID: 4,
        user_email: 'youllN3v3rCatchMe@notreal.com',
        user_password: '8'
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_access', null, {})
  }
};
