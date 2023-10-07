class OrderController {
  constructor({ product, promotion, order, cart, all_order }) {
    this.product = product;
    this.promotion = promotion;
    this.order = order;
    this.cart = cart;
    this.all_order = all_order;
  }

  // =================== VIEW ORDER SUMMARY =================== //
  viewOrderSummary = async (req, res) => {
    try {
      const { subtotal, discount, total } = await this.calculateTotalAmount(
        this.cart
      );

      return res.status(200).json({
        success: true,
        data: {
          subtotal,
          discount,
          total,
        },
        msg: "Success: Retrieved items added in cart!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== VIEW AMOUNT AFTER APPLYING PROMO CODE =================== //
  applyPromoCode = async (req, res) => {
    const { promoCode } = req.body;

    try {
      const isValidPromoCode = await this.promotion.findOne({
        where: { code: promoCode },
      });

      if (!isValidPromoCode) {
        return res.status(400).json({
          error: true,
          msg: "Error: Invalid promo code.",
        });
      }

      const discountAmount = parseFloat(isValidPromoCode.amount);

      const { subtotal, discount, total } = await this.calculateTotalAmount(
        this.cart,
        discountAmount
      );

      return res.status(200).json({
        success: true,
        data: {
          subtotal,
          discount,
          total,
        },
        msg: "Success: Retrieved items added in cart!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== ADD NEW ORDER =================== //
  addNewOrder = async (req, res) => {
    const { promoCode } = req.body;

    try {
      let discountAmount;

      if (promoCode) {
        const isValidPromoCode = await this.promotion.findOne({
          where: { code: promoCode },
        });

        if (!isValidPromoCode) {
          return res.status(400).json({
            error: true,
            msg: "Error: Invalid promo code.",
          });
        }

        discountAmount = parseFloat(isValidPromoCode.amount);
      } else {
        discountAmount = 0;
      }

      const { subtotal, discount, total } = await this.calculateTotalAmount(
        this.cart,
        discountAmount
      );

      const newOrderEntry = await this.order.create({
        subtotal: parseFloat(subtotal),
        discount: parseFloat(discount),
        total: parseFloat(total),
      });

      // retrieved the list of items that were checked out
      const allItemsInCart = await this.cart.findAll({
        include: [{ model: this.product, attributes: ["name"] }],
      });

      // map through the list of items to retrieve the 'productId' and 'quantity'
      const itemsCheckedOut = allItemsInCart.map((item) => {
        return {
          name: item.product.name,
          productId: item.productId,
          quantity: item.quantity,
        };
      });

      for (const item of itemsCheckedOut) {
        // after retrieving the data, add new record(s) in 'all_order' table
        await this.all_order.create({
          orderId: newOrderEntry.id,
          productId: item.productId,
          quantity: item.quantity,
        });

        // update stock inventory
        const product = await this.product.findByPk(item.productId);
        const newQuantity = product.quantity - item.quantity;
        await this.product.update(
          {
            quantity: newQuantity,
          },
          { where: { id: item.productId } }
        );
      }

      return res.status(200).json({
        success: true,
        data: { newOrderEntry, itemsCheckedOut },
        msg: "Success: Your order has been submitted!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  calculateTotalAmount = async (cart, discountAmount = 0) => {
    try {
      const allItemsInCart = await cart.findAll();

      const subtotal = allItemsInCart.reduce((total, item) => {
        const itemAmount = parseFloat(item.amount);
        return total + itemAmount;
      }, 0);

      const totalAmount = subtotal - discountAmount;

      return {
        subtotal: subtotal.toFixed(2),
        discount: discountAmount.toFixed(2),
        total: totalAmount.toFixed(2),
      };
    } catch (error) {
      throw error;
    }
  };
}

module.exports = OrderController;
