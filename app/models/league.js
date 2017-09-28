'use strict';
module.exports = (sequelize, DataTypes) => {
  var League = sequelize.define('League', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return League;
};