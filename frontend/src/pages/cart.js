import { useEffect, useState } from "react";
import axios from "axios";
import CartItemTable from "../components/CartItemTable";
import CartPromoContainer from "../components/CartPromoContainer";
import CartTotalTable from "../components/CartTotalTable";
import OrderConfirmed from "./orderConfirmed";
import ButtonSubmit from "../components/ButtonSubmit";
import ButtonBack from "../components/ButtonBack";
import LoadingIcon from "../components/LoadingIcon";

function Cart() {
  const [allCartItems, setAllCartItems] = useState([]);
  const [cartOrderSummary, setCartOrderSummary] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [hasPromoCode, setHasPromoCode] = useState(false);

  const [itemsCheckedOut, setItemsCheckedOut] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCartOrderSummary = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API}/orders`
        );
        setCartOrderSummary(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
      setLoading(false);
    };
    getCartOrderSummary();
  }, []);

  useEffect(() => {
    if (hasPromoCode === true) {
      const getUpdatedCartOrderSummary = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_DB_API}/orders/promo`,
            {
              promoCode,
            }
          );
          setCartOrderSummary(response.data.data);
        } catch (error) {
          console.log(error.response.data.msg);
        }
        setLoading(false);
      };
      getUpdatedCartOrderSummary();
    }
  }, [hasPromoCode]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DB_API}/orders`,
        {
          promoCode,
        }
      );
      // console.log(response.data.data);
      setItemsCheckedOut(response.data.data.itemsCheckedOut);
      setOrderDetails(response.data.data.newOrderEntry);
      setShowOrderModal(true);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    const removeItemsFromCart = async () => {
      for (const item of itemsCheckedOut) {
        await axios.delete(`${process.env.REACT_APP_DB_API}/carts/${item.id}`);
      }
      setCartOrderSummary(null);
      setAllCartItems(null);
    };
    removeItemsFromCart();
  }, [orderDetails]);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <>
      {!showOrderModal ? (
        <div className="flex flex-col gap-8">
          <div className="flex flex-start pl-16 pt-8">
            <ButtonBack />
          </div>
          <div className="text-3xl font-semibold flex justify-center">
            Order Summary
          </div>

          <CartItemTable
            allCartItems={allCartItems}
            setAllCartItems={setAllCartItems}
          />
          <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-12 lg:flex-row xl:flex-row 2xl:flex-row">
            <CartPromoContainer
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              hasPromoCode={hasPromoCode}
              setHasPromoCode={setHasPromoCode}
              setCartOrderSummary={setCartOrderSummary}
            />
            <CartTotalTable
              cartOrderSummary={cartOrderSummary}
              setCartOrderSummary={setCartOrderSummary}
            />
          </div>
          <ButtonSubmit handleSubmitOrder={handleSubmitOrder} />
        </div>
      ) : (
        <OrderConfirmed
          itemsCheckedOut={itemsCheckedOut}
          orderDetails={orderDetails}
        />
      )}
    </>
  );
}

export default Cart;
