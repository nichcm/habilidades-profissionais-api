


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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type:DataTypes.STRING,
      validate: {
        len: [6,128]
      },
    },
    adm: DataTypes.STRING


  }, {
    sequelize,
    modelName: 'Pessoas',
    timestamps: false,
    underscored: true,
    paranoid: true,
  },
);


  return Pessoas;
};