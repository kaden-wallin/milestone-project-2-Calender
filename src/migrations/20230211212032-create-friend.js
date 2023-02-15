'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('friend', {
        friend_count: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      friend_ID: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      site_ID_map: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('friend')
  }
}
