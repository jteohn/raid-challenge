import OrdersTable from "../components/OrdersTable";
import ButtonBack from "../components/ButtonBack";

function Orders() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex flex-start pl-16 pt-8">
        <ButtonBack />
      </div>
      <div className="text-3xl font-semibold flex justify-center">
        All Orders
      </div>
      <OrdersTable />
    </div>
  );
}

export default Orders;
