const cors = require("cors");
const express = require("express");
require("dotenv").config();

const ProductRouter = require("./routers/productRouter");
const CartRouter = require("./routers/cartRouter");
const OrderRouter = require("./routers/orderRouter");

const ProductController = require("./controllers/productController");
const CartController = require("./controllers/cartController");
const OrderController = require("./controllers/orderController");

const db = require("./db/models/index");
const { product, promotion, order, cart, all_order } = db;

// initialising controllers
const productController = new ProductController({
  product,
});

const cartController = new CartController({
  product,
  cart,
});

const orderController = new OrderController({
  product,
  promotion,
  order,
  cart,
  all_order,
});

// initialising routers
const productRouter = new ProductRouter(productController).routes();
const cartRouter = new CartRouter(cartController).routes();
const orderRouter = new OrderRouter(orderController).routes();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using the routers
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
