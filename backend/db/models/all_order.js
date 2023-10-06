"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class All_Order extends Model {
    static associate(models) {
      this.belongsTo(models.order);
      this.belongsTo(models.product);
    }
  }
  All_Order.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "all_order",
      underscored: true,
    }
  );
  return All_Order;
};
