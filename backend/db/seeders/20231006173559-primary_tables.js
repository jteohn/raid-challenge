"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Apple",
        price: 2.0,
        quantity: 15,
        image: "/apple.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Banana",
        price: 1.5,
        quantity: 25,
        image: "/banana.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Pear",
        price: 2.3,
        quantity: 10,
        image: "/pear.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Orange",
        price: 1.8,
        quantity: 8,
        image: "/orange.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Watermelon",
        price: 7.5,
        quantity: 10,
        image: "/watermelon.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Cherries",
        price: 8.0,
        quantity: 15,
        image: "/cherries.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        name: "Lemon",
        price: 1,
        quantity: 20,
        image: "/lemon.jpg",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);

    await queryInterface.bulkInsert("promotions", [
      {
        code: "GET2OFF",
        amount: 2,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);

    await queryInterface.bulkInsert("orders", [
      {
        subtotal: 14.5,
        discount: 0,
        total: 14.5,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders");
    await queryInterface.bulkDelete("promotions");
    await queryInterface.bulkDelete("products");
  },
};
