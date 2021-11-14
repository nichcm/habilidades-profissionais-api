'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Niveis.init({
    nivel: DataTypes.STRING,
    experiencia: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Niveis',
    timestamps: false,
    underscored: true,
  });
  return Niveis;
};