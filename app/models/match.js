'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    home: DataTypes.STRING,
    homeLogo: DataTypes.STRING,
    away: DataTypes.STRING,
    awayLogo: DataTypes.STRING,
    startTime: DataTypes.DATE,
    matchResult: DataTypes.NUMBER,
    leagueId: DataTypes.NUMBER
  }, {
    timestamp: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Match;
};