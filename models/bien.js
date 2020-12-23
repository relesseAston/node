'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bien.hasMany(models.Annonce);
      Bien.hasMany(models.Acheter);
    }
  };
  Bien.init({
    description: DataTypes.STRING,
    prix: DataTypes.FLOAT,
    surface: DataTypes.FLOAT,
    mot_cle: DataTypes.STRING,
    caracteristique: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bien',
  });
  return Bien;
};