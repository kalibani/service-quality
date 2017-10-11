'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserQuestioners', [{
      UserId: 1,
      QuestionerId: 1,
      nilai_harapan: 4,
      nilai_kenyataan: 3,
      nilai_gap: 1,
      nama_instruktur: "Hari",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
