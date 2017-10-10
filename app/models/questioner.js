'use strict';
module.exports = function(sequelize, DataTypes) {
  var Questioner = sequelize.define('Questioner', {
    pertanyaan: DataTypes.TEXT,
    dimensi: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Questioner;
};