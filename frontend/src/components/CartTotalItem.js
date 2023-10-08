function CartTotalItem(props) {
  const { cartOrderSummary } = props;

  return (
    <>
      <tbody className="text-center">
        {/* row 1 */}
        <tr className="border-none text-grey-300">
          <td colSpan="2">Subtotal</td>
          <td></td>
          <td>${cartOrderSummary ? cartOrderSummary.subtotal : "0.00"}</td>
        </tr>
        {/* row 2 */}
        <tr className="text-grey-300">
          <td colSpan="2">Discount</td>
          <td></td>
          <td>-${cartOrderSummary ? cartOrderSummary.discount : "0.00"}</td>
        </tr>
        {/* row 3 */}
        <tr className="border-t border-grey-100 text-lg">
          <th colSpan="2">Total</th>
          <th></th>
          <th>${cartOrderSummary ? cartOrderSummary.total : "0.00"}</th>
        </tr>
      </tbody>
    </>
  );
}
export default CartTotalItem;
