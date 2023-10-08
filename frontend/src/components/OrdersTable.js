import { useEffect, useState } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";
import LoadingIcon from "./LoadingIcon";

function OrdersTable() {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API}/orders/all`
        );
        setAllOrders(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
      setLoading(false);
    };
    getAllOrders();
  }, []);

  if (loading) {
    return <LoadingIcon />;
  }

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
            <OrderItem allOrders={allOrders} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrdersTable;
