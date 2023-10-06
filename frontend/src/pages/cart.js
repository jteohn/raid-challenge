import CartTable from "../components/CartTable";
import CartPromo from "../components/CartPromo";
import CartTotal from "../components/CartTotal";
import SubmitButton from "../components/SubmitButton";

function Cart() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold flex justify-start pl-16 pt-8">
        Order Summary
      </div>

      <CartTable />
      <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-12 lg:flex-row xl:flex-row 2xl:flex-row">
        <CartPromo />
        <CartTotal />
      </div>
      <SubmitButton />
    </div>
  );
}

export default Cart;
