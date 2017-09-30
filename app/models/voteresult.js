'use strict';
module.exports = (sequelize, DataTypes) => {
  var VoteResult = sequelize.define('VoteResult', {
    userId: DataTypes.BIGINT,
    matchId: DataTypes.INTEGER,
    voteResult: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return VoteResult;
};