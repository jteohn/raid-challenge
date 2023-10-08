import CartPromoInput from "./CartPromoInput";

function CartPromoContainer(props) {
  const { promoCode, setPromoCode, setHasPromoCode, setCartOrderSummary } =
    props;
  const isMobile = window.innerWidth < 766;

  return (
    <>
      {isMobile ? (
        <div className="flex justify-center">
          <div className="stats shadow w-3/4 md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
            <div className="stat">
              <div className="stat-title flex justify-start pb-4">
                Promo Code
              </div>
              <div className="flex justify-start">
                <CartPromoInput
                  setHasPromoCode={setHasPromoCode}
                  promoCode={promoCode}
                  setPromoCode={setPromoCode}
                  setCartOrderSummary={setCartOrderSummary}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="stats shadow w-3/4 h-full md:w-2/6 lg:w-2/6 xl:w-2/6 2xl:w-2/6">
          <div className="stat">
            <div className="stat-title flex justify-start pt-2">Promo Code</div>
            <div className="flex justify-start pt-4">
              <CartPromoInput
                setHasPromoCode={setHasPromoCode}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                setCartOrderSummary={setCartOrderSummary}
              />
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
export default CartPromoContainer;
