'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movie.init({
    title: {
        type: DataTypes.TEXT,
        validate: { notNull: true }
    },
    headline: {
        type: DataTypes.TEXT,
        validate: { notNull: true }
    },
    byline: {
        type: DataTypes.TEXT,
        validate: { notNull: true }
    },
    date: {
        type: DataTypes.DATE,
        validate: { isDate: true }
    },
    url: {
        type: DataTypes.TEXT,
        validate: { isUrl: true }
    },
    sequelize,
    modelName: 'movie',
  });
  return movie;
};