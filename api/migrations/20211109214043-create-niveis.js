'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Niveis', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      nivel: {
        type: Sequelize.STRING
      },

      habilidades_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'habilidades', key: 'id'}
      },

      pessoas_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'pessoas', key: 'id'}
      },
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Niveis');
  }
};