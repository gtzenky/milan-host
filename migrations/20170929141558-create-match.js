'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      home: {
        type: Sequelize.STRING
      },
      homeLogo: {
        type: Sequelize.STRING
      },
      away: {
        type: Sequelize.STRING
      },
      awayLogo: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE
      },
      matchResult: {
        type: Sequelize.INTEGER
      },
      leagueId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matches');
  }
};