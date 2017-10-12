'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserQuestioner = sequelize.define('UserQuestioner', {
    UserId: DataTypes.INTEGER,
    QuestionerId: DataTypes.INTEGER,
    nilai_harapan: DataTypes.INTEGER,
    nilai_kenyataan: DataTypes.INTEGER,
    nilai_gap: DataTypes.INTEGER,
    nama_instruktur: DataTypes.STRING,
    InstructorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  UserQuestioner.associate = function(models) {
    UserQuestioner.belongsTo(models.User);
    UserQuestioner.belongsTo(models.Questioner);
    UserQuestioner.belongsTo(models.Instructor);
  }



  return UserQuestioner;
};
