'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  return queryInterface.bulkInsert('UserQuestioners', [{
    UserId: 1,
    QuestionerId: 6,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 7,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 8,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 9,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 10,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 11,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 12,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 13,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 14,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 15,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 16,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 17,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    UserId: 1,
    QuestionerId: 18,
    nilai_harapan: 4,
    nilai_kenyataan: 3,
    nilai_gap: 1,
    nama_instruktur: "Hari",
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
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
