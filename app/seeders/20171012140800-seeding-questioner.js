'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Questioners', [{
      pertanyaan: "Penampilan instruktur selalu rapi dan bersih? ",
      dimensi: "Tangibles",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Sikap instruktur selalu ramah terhadap murid? ",
      dimensi: "Tangibles",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur memiliki kemampuan serta ilmu pengetahuan yang menunjang pekerjaannya?",
      dimensi: "Reliability",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Kesiapan instruktur dalam menyampaikan materi?",
      dimensi: "Reliability",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur mengajarkan materi dengan jelas?",
      dimensi: "Reliability",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur menjawab setiap pertanyaan murid dengan jelas?",
      dimensi: "Reliability",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Saat murid mengalami kesulitan, instruktur membantu dengan segera?",
      dimensi: "Responsiveness",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Saat murid bertanya, instruktur menanggapinya dengan segera?",
      dimensi: "Responsiveness",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Apakah murid yakin dengan kemampuan instruktur?",
      dimensi: "Assurance",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Apakah murid merasa nyaman dalam bertanya / berkonsultasi dengan instruktur?",
      dimensi: "Assurance",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur memberikan perhatian pribadi kepada murid?",
      dimensi: "Empathy",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur selalu bertanya tentang kesulitan-kesulitan yang dialami oleh murid?",
      dimensi: "Empathy",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      pertanyaan: "Instruktur selalu siap membantu murid bahkan diluar waktu belajar?",
      dimensi: "Empathy",
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
