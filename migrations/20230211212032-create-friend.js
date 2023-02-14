'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('friend', {
        friend_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      friend_list: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_foreign_key: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      access_foreign_key: {
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
    await queryInterface.dropTable('friend')
  }
}
