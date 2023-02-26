'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reported_users', [
      {
        reported_user_ID: 2,
        reported_user_email: 'FakeEmail@notreal.com',
        user_ID: 3
      },
      {
        reported_user_ID: 1,
        reported_user_email: 'NOTaREALemail@notreal.com',
        user_ID: 3
      },
      {
        reported_user_ID: 4,
        reported_user_email: 'youllN3v3rCatchMe@notreal.com',
        user_ID: 3
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reported_users', null, {})
  }
};