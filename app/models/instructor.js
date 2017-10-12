'use strict';
module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define('Instructor', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Instructor.associate = function (models) {
    Instructor.hasMany(models.UserQuestioner)
  }
  return Instructor;
};
