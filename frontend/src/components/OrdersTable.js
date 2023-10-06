import OrderItem from "./OrderItem";

function OrdersTable() {
  return (
    <div className="flex justify-center">
      <div className="overflow-y-auto bg-white w-3/4 rounded-xl shadow-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-grey-300">
              <th>Order Number</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-grey-300">
            <OrderItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrdersTable;
