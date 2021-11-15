'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Pessoas.belongsToMany(models.Habilidades, {through: models.Niveis})
    }
  };
  Pessoas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    adm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    timestamps: false,
    underscored: true,
  });
  return Pessoas;
};