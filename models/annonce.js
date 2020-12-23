'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annonce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Annonce.belongsTo(models.Agent);
      Annonce.belongsTo(models.Bien);
    }
  };
  Annonce.init({
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    statut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Annonce',
  });
  return Annonce;
};