'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
        user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_data: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      access_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      friend_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
        event_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user')
  }
};