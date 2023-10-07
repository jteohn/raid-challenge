const express = require("express");
const router = express.Router();

class ProductRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAllProducts);
    router.put("/:productId", this.controller.updateOneProduct);
    return router;
  }
}

module.exports = ProductRouter;
