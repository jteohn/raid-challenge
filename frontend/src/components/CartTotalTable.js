import CartTotalItem from "./CartTotalItem";

function CartTotalTable(props) {
  const { cartOrderSummary } = props;
  const isMobile = window.innerWidth < 766;

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center">
          <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
            <div className="stat">
              <table className="table">
                <CartTotalItem cartOrderSummary={cartOrderSummary} />
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6 ">
          <div className="stat">
            <table className="table text-center">
              <CartTotalItem cartOrderSummary={cartOrderSummary} />
            </table>
          </div>
        </div>
      )}
    </>
  );
}
export default CartTotalTable;
