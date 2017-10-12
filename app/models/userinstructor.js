'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserInstructor = sequelize.define('UserInstructor', {
    UserId: DataTypes.INTEGER,
    InstructorId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  UserInstructor.associate = function(models) {
    UserInstructor.belongsTo(models.User);
    UserInstructor.belongsTo(models.Instructor);
  }
  return UserInstructor;
};
