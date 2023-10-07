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
      const allItemsInCart = await this.cart.findAll();

      // calculate the total amount
      const totalCartAmount = allItemsInCart.reduce((total, item) => {
        const itemAmount = parseFloat(item.amount);
        console.log("itemAmount", itemAmount);
        return total + itemAmount;
      }, 0);
      console.log("totalCartAmount", totalCartAmount);

      return res.status(200).json({
        success: true,
        data: { allItemsInCart, totalAmount: totalCartAmount.toFixed(2) },
        msg: "Success: Retrieved items added in cart!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };
}

module.exports = OrderController;
