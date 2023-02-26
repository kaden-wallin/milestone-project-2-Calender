'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('friends', [
      {
        friend_ID: 5,
        user_ID: 3,
        accepted_friends: ['Tony']
      },
      {
        friend_ID: 3,
        user_ID: 3,
        accepted_friends: ['Richard']
      },
      {
        friend_ID: 4,
        user_ID: 3,
        accepted_friends: ['James']
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('friends', null, {})
  }
};