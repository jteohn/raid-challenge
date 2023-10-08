import moment from "moment";

function OrderItem(props) {
  const { allOrders } = props;

  return (
    <>
      {allOrders.map((order) => (
        <tr key={order.id}>
          <td>N00{order.id}</td>
          <td>${order.total}</td>
          <td>{moment(order.createdAt).format("DD/MM/YYYY")}</td>
        </tr>
      ))}
    </>
  );
}
export default OrderItem;
