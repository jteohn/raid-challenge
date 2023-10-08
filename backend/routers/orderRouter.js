const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.viewOrderSummary);
    router.post("/promo", this.controller.applyPromoCode);
    router.post("/", this.controller.addNewOrder);
    router.get("/all", this.controller.getAllOrders);
    return router;
  }
}

module.exports = OrderRouter;
