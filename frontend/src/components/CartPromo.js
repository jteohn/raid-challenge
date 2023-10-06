function CartPromo() {
  const isMobile = window.innerWidth < 766;

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center">
          <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
            <div className="stat">
              <div className="stat-title flex justify-start">Promo Code</div>
              <div className="flex justify-start">
                <input className="bg-grey-100 rounded-md w-3/4" />
                <button className="bg-grey-200 w-1/4 text-sm">Apply</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="stats shadow w-3/4 h-full md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
          <div className="stat">
            <div className="stat-title flex justify-start pt-2">Promo Code</div>
            <div className="flex justify-start pt-4">
              <input className="bg-grey-100 rounded-l-md w-3/4 h-10" />
              <button className="bg-grey-200 w-1/4 text-sm rounded-r-md">
                Apply
              </button>
            </div>
            <div className="text-left text-xs pt-5 text-grey-200 italic">
              Before proceeding with order processing, please ensure that you
              have thoroughly reviewed the customer's order.{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CartPromo;

// w-3/4 sm:w-2/4 md:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/4
