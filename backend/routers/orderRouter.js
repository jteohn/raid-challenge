const express = require("express");
const router = express.Router();

class OrderRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.viewOrderSummary);
    return router;
  }
}

module.exports = OrderRouter;
