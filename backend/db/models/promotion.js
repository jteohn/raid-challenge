"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {}
  Promotion.init(
    {
      code: DataTypes.STRING,
      amount: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "promotion",
      underscored: true,
    }
  );
  return Promotion;
};
