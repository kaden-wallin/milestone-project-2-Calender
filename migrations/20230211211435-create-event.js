'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('event', {
        event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      details: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      friend_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('event')
  }
}