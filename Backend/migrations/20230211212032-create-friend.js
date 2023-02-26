'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('friends', {
      friend_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_ID: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      accepted_friends: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('friends')
  }
}
