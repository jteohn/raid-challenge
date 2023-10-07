const express = require("express");
const router = express.Router();

class CartRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.viewCart);
    router.post("/", this.controller.addItemToCart);
    router.put("/:cartId", this.controller.updateItemInCart);
    router.delete("/:cartId", this.controller.removeItemFromCart);
    return router;
  }
}

module.exports = CartRouter;
