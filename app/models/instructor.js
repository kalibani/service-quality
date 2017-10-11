'use strict';
module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define('Instructor', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Instructor;
};