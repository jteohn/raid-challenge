function CartTotal() {
  const isMobile = window.innerWidth < 766;

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center">
          <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
            <div className="stat">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr className="border-none text-grey-300">
                    <td colSpan="2">Subtotal</td>
                    <td></td>
                    <td>$10.00</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="text-grey-300">
                    <td colSpan="2">Discount</td>
                    <td></td>
                    <td>-$5.00</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="border-t border-grey-100 text-lg">
                    <th colSpan="2">Total</th>
                    <th></th>
                    <th>$5.00</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 ">
          <div className="stat">
            <table className="table text-center">
              <tbody>
                {/* row 1 */}
                <tr className="border-none text-grey-300">
                  <td colSpan="2">Subtotal</td>
                  <td></td>
                  <td>$10.00</td>
                </tr>
                {/* row 2 */}
                <tr className="text-grey-300">
                  <td colSpan="2">Discount</td>
                  <td></td>
                  <td>-$5.00</td>
                </tr>
                {/* row 3 */}
                <tr className="border-t border-grey-100 text-lg">
                  <th colSpan="2">Total</th>
                  <th></th>
                  <th>$5.00</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
export default CartTotal;
