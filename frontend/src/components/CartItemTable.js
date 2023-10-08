import { useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";

function CartItemTable(props) {
  const { allCartItems, setAllCartItems } = props;

  useEffect(() => {
    const getAllItemsInCart = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API}/carts`
        );
        setAllCartItems(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
    };
    getAllItemsInCart();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="overflow-y-auto bg-white w-3/4 rounded-xl shadow-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-grey-300">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-grey-300">
            <CartItem
              allCartItems={allCartItems}
              setAllCartItems={setAllCartItems}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CartItemTable;
