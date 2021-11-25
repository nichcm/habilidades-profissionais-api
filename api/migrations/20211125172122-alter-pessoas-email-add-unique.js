'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('pessoas','email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('pessoas','email', {
      type: Sequelize.STRING,
      unique:false
    })
  }
};
