'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    home: DataTypes.STRING,
    homeLogo: DataTypes.STRING,
    away: DataTypes.STRING,
    awayLogo: DataTypes.STRING,
    startTime: DataTypes.DATE,
    matchResult: DataTypes.INTEGER,
    round: DataTypes.STRING,
    leagueId: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Match;
};