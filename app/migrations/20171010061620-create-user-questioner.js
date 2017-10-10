'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('UserQuestioners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      QuestionerId: {
        type: Sequelize.INTEGER
      },
      nilai_harapan: {
        type: Sequelize.INTEGER
      },
      nilai_kenyataan: {
        type: Sequelize.INTEGER
      },
      nilai_gap: {
        type: Sequelize.INTEGER
      },
      nama_instruktur: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserQuestioners');
  }
};