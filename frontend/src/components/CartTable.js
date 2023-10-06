import CartItem from "./CartItem";

function CartTable() {
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
            <CartItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CartTable;
