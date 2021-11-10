'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Habilidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      tipoCategoria: {
        type: Sequelize.STRING
      },

      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'categorias', key: 'id'}
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Habilidades');
  }
};