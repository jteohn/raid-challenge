class CartController {
  constructor({ product, cart }) {
    this.product = product;
    this.cart = cart;
  }

  // =================== VIEW CART =================== //
  viewCart = async (req, res) => {
    try {
      const allItemsInCart = await this.cart.findAll({
        include: [{ model: this.product }],
      });

      return res.status(200).json({
        success: true,
        data: allItemsInCart,
        msg: "Success: Retrieved items added in cart!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== ADD ITEM TO CART =================== //
  addItemToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        error: true,
        msg: "Error: Please fill in all required fields and try again.",
      });
    }

    try {
      const product = await this.product.findByPk(productId);
      const amount = product.price * quantity;

      const currentCart = await this.cart.findOne({ where: { productId } });

      // check if item already exists in cart
      if (currentCart) {
        await this.cart.update(
          {
            quantity,
            amount,
          },
          { where: { productId } }
        );
      } else {
        await this.cart.create({
          productId,
          quantity,
          amount,
        });
      }

      const allItemsInCart = await this.cart.findAll({
        include: [{ model: this.product }],
      });

      return res.status(200).json({
        success: true,
        data: allItemsInCart,
        msg: `Success: You have added '${product.name}' to cart!`,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== UPDATE ITEM IN CART (QTY) =================== //
  updateItemInCart = async (req, res) => {
    const { cartId } = req.params;
    const { quantity } = req.body;

    if (quantity < 1) {
      return res.status(400).json({
        error: true,
        msg: "Error: Quantity cannot be less than 1.",
      });
    }

    try {
      const item = await this.cart.findByPk(cartId, {
        include: [{ model: this.product }],
      });

      if (item) {
        await this.cart.update(
          {
            quantity,
          },
          { where: { id: cartId } }
        );
      } else {
        return res.status(404).json({
          error: true,
          msg: "Error: Cart item not found.",
        });
      }

      const allItemsInCart = await this.cart.findAll({
        include: [{ model: this.product }],
      });

      return res.status(200).json({
        success: true,
        data: allItemsInCart,
        msg: `Success: '${item.product.name}' quantity in your cart has been updated!`,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== REMOVE ITEM FROM CART =================== //
  removeItemFromCart = async (req, res) => {
    const { cartId } = req.params;

    try {
      const item = await this.cart.findByPk(cartId, {
        include: [{ model: this.product }],
      });

      if (!item) {
        return res.status(404).json({
          error: true,
          msg: "Error: Cart item not found.",
        });
      } else {
        await this.cart.destroy({
          where: {
            id: cartId,
          },
        });
      }

      const allItemsInCart = await this.cart.findAll({
        include: [{ model: this.product }],
      });

      return res.status(200).json({
        success: true,
        data: allItemsInCart,
        msg: `Success: '${item.product.name}' has been removed from your cart!`,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };
}

module.exports = CartController;
