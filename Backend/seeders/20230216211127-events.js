'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        event_location: 'Movie Theater',
        event_title: 'Movies',
        event_date: '2023-02-21 17:00:00',
        user_ID: 2
      },
      {
        event_location: 'My House',
        event_title: 'Party',
        event_date: '2023-03-01 19:30:00',
        user_ID: 3
      },
      {
        event_location: 'Westchester',
        event_title: 'Durby',
        event_date: '2023-06-21 13:00:00',
        user_ID: 2
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};