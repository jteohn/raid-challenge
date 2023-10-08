import axios from "axios";
import { RxCross2 } from "react-icons/rx";

function CartItem(props) {
  const { allCartItems, setAllCartItems } = props;

  const handleRemoveItem = async (itemId) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_DB_API}/carts/${itemId}`
    );
    setAllCartItems(response.data.data);
  };

  const sortedCartArray =
    allCartItems && allCartItems.sort((a, b) => a.id - b.id);

  return (
    <>
      {allCartItems &&
        sortedCartArray.map((item) => (
          <tr key={item.id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div>{item.product.name}</div>
                </div>
              </div>
            </td>
            <td>{item.quantity}</td>
            <td>${item.amount}</td>
            <th className="tooltip" data-tip="remove">
              <button
                className="w-6 h-6 rounded-full hover:bg-grey-200 hover:text-white items-center"
                onClick={() => handleRemoveItem(item.id)}
              >
                <RxCross2 className="w-4 h-4 mx-auto" />
              </button>
            </th>
          </tr>
        ))}
    </>
  );
}
export default CartItem;
