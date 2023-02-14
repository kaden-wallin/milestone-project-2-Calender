'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('access', {
        access_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      access_type: {
        type: Sequelize.TEXT,
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
      },
        event_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('access')
  }
}