"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // ! super m-m r/s?
      this.hasMany(models.all_order);
      this.belongsToMany(models.product, {
        through: models.all_order,
      });
    }
  }
  Order.init(
    {
      subtotal: DataTypes.DECIMAL(10, 2),
      discount: DataTypes.DECIMAL(10, 2),
      total: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return Order;
};
