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
    return router;
  }
}

module.exports = OrderRouter;
