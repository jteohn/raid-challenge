class ProductController {
  constructor({ product }) {
    this.product = product;
  }

  // =================== GET ALL PRODUCTS =================== //
  getAllProducts = async (req, res) => {
    try {
      const products = await this.product.findAll();
      return res.status(200).json({
        success: true,
        data: products,
        msg: "Success: Retrieved all products information!",
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== ADD NEW PRODUCT =================== //

  // =================== UPDATE PRODUCT INFORMATION =================== //
  updateOneProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, price, quantity } = req.body;

    try {
      await this.product.update(
        {
          name,
          price,
          quantity,
        },
        { where: { id: productId } }
      );

      const updatedProduct = await this.product.findByPk(productId);

      const allProducts = await this.product.findAll();

      return res.status(200).json({
        success: true,
        data: allProducts,
        msg: `Success: '${updatedProduct.name}' has been updated!`,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Error: We encountered an error while handling your request. Please try again.",
      });
    }
  };

  // =================== DELETE ONE PRODUCT =================== //
}

module.exports = ProductController;
