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

      Habilidades.belongsToMany(models.Pessoas, {through: models.Niveis})
      Habilidades.belongsTo(models.Categorias)
      
    }
    
  };
  Habilidades.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Habilidades',
    timestamps: false,
    underscored: true,
  });
  return Habilidades;
};