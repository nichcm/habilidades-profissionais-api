'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('pessoas', [{
       name: 'John Doe',
       isBetaMember: false
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
