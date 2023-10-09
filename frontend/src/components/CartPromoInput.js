import axios from "axios";
import { toast } from "react-toastify";

function CartPromoInput({
  promoCode,
  setPromoCode,
  setHasPromoCode,
  setCartOrderSummary,
}) {
  const handleApplyPromo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DB_API}/orders/promo`,
        {
          promoCode,
        }
      );
      setCartOrderSummary(response.data.data);
      setHasPromoCode(true);
      toast.success("Promo code has been applied!");
    } catch (error) {
      console.log(error.response.data.msg);
      toast.info(`The promo code '${promoCode}' is invalid or expired.`);
      setPromoCode("");
    }
  };

  return (
    <>
      <input
        className="bg-grey-100 rounded-md w-3/4 h-8 text-xs pl-2"
        type="text"
        name="promoCode"
        placeholder="Enter promo code here"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
      />
      <button
        className="bg-grey-200 w-1/4 text-sm"
        onClick={(e) => handleApplyPromo(e)}
      >
        Apply
      </button>
    </>
  );
}
export default CartPromoInput;
