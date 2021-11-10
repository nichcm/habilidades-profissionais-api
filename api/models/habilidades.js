'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habilidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Habilidades.hasMany(Categorias, {
        foreignKey: 'habilidades_id'
      })
    }
  };
  Habilidades.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tipoCategoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habilidades',
  });
  return Habilidades;
};