"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.cart);

      // ! super m-m r/s?
      this.hasMany(models.all_order);
      this.belongsToMany(models.order, {
        through: models.all_order,
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      quantity: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product",
      underscored: true,
    }
  );
  return Product;
};
