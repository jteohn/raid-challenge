import { useEffect, useState } from "react";
import axios from "axios";

function ProductCard(props) {
  const { allProducts, allCartItems, setAllCartItems } = props;
  const [cartQuantity, setCartQuantity] = useState({});

  useEffect(() => {
    // object containing cart.id and cart.quantity
    const currentItemQtyObject = {};
    // create a key-value pair in the currentItemQtyObject
    allCartItems.forEach((item) => {
      currentItemQtyObject[item.id] = item.quantity;
    });

    setCartQuantity(currentItemQtyObject);
  }, [allCartItems]);

  const handleIncrement = async (cartId, productId) => {
    const currentItemQty = cartQuantity[cartId];

    if (currentItemQty) {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_DB_API}/carts/${cartId}`,
          {
            quantity: currentItemQty + 1,
          }
        );
        setAllCartItems(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_DB_API}/carts`,
          {
            productId,
            quantity: 1,
          }
        );
        setAllCartItems(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
    }
  };

  const handleDecrement = async (cartId) => {
    const currentItemQty = cartQuantity[cartId];

    if (currentItemQty === 1) {
      const response = await axios.delete(
        `${process.env.REACT_APP_DB_API}/carts/${cartId}`
      );
      setAllCartItems(response.data.data);
    } else {
      try {
        const response = await axios.put(
          `${process.env.REACT_APP_DB_API}/carts/${cartId}`,
          {
            quantity: currentItemQty - 1,
          }
        );
        setAllCartItems(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
    }
  };

  const sortedProductsArray =
    allProducts && allProducts.sort((a, b) => a.id - b.id);

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-6">
      {sortedProductsArray.map((product) => {
        // match the productId in allCartItems to the allProducts' product.id
        const cartItem = allCartItems.find(
          (item) => item.productId === product.id
        );
        const cartId = cartItem ? cartItem.id : null;
        const quantityInCart = cartItem ? cartItem.quantity : 0;

        return (
          <div className="card w-60 glass shadow-lg" key={product.id}>
            <figure>
              <img src={product.image} alt={product.name} className="h-44" />
            </figure>
            <div className="h-28 flex-row justify-start pl-8 pt-4">
              <div className="card-title">{product.name}</div>
              <div className="flex justify-start text-sm">
                Stock: {product.quantity}
              </div>
              <div className="flex flex-row justify-between items-center pr-5 pt-2">
                <div>
                  <div className="text-sm font-semibold">
                    ${product.price} per pack
                  </div>
                </div>
                <button
                  className={`w-6 h-6 rounded-lg text-white ${
                    quantityInCart === 1
                      ? "bg-grey-200 tooltip"
                      : "bg-green-100"
                  } ${product.quantity === 0 ? "bg-grey-200" : "bg-green-100"}`}
                  data-tip="remove"
                  onClick={() => handleDecrement(cartId, product.id)}
                  disabled={product.quantity === 0}
                >
                  -
                </button>
                <div className="text-sm">{quantityInCart}</div>
                <div className="flex flex-row gap-2 items-center">
                  <button
                    className={`w-6 h-6 rounded-lg text-white ${
                      product.quantity === quantityInCart
                        ? "bg-grey-200"
                        : "bg-green-100"
                    }`}
                    onClick={() => handleIncrement(cartId, product.id)}
                    disabled={product.quantity === quantityInCart}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;

// TODO: map, find, forEach
