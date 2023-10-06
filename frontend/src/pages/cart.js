import CartTable from "../components/CartTable";
import CartPromo from "../components/CartPromo";
import CartTotal from "../components/CartTotal";
import ButtonSubmit from "../components/ButtonSubmit";
import ButtonBack from "../components/ButtonBack";

function Cart() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-start pl-16 pt-8">
        <ButtonBack />
      </div>
      <div className="text-3xl font-semibold flex justify-center">
        Order Summary
      </div>

      <CartTable />
      <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-12 lg:flex-row xl:flex-row 2xl:flex-row">
        <CartPromo />
        <CartTotal />
      </div>
      <ButtonSubmit />
    </div>
  );
}

export default Cart;
