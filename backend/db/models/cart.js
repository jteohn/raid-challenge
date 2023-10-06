"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.product);
    }
  }
  Cart.init(
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "cart",
      underscored: true,
    }
  );
  return Cart;
};
