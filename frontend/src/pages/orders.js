import OrdersTable from "../components/OrdersTable";

function Orders() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold flex justify-start pl-16 pt-8">
        All Orders
      </div>
      <OrdersTable />
    </div>
  );
}

export default Orders;
