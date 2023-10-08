import { useNavigate } from "react-router-dom";

function OrderConfirmed(props) {
  const { itemsCheckedOut, orderDetails } = props;
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-16">
      <div className="card w-4/5 md:w-3/5 lg:w-2/4 glass bg-grey-200 bg-opacity-90">
        <div className="card-body">
          <div className="flex flex-col gap-6 pb-4">
            <h2 className="card-title text-2xl mx-auto">
              Your order has been received!
            </h2>
            {/* ORDER SUMMARY */}
            <div>
              <div className="font-semibold text-md">Order Summary</div>
              <p className="text-sm">Order Number: N00{orderDetails.id}</p>
              <p className="text-sm">Order Date: N00{orderDetails.id}</p>
            </div>
            {/* ITEMS ORDERED */}
            <div>
              {itemsCheckedOut.map((item) => (
                <p key={item.id} className="text-sm">
                  {item.name} x{item.quantity}
                </p>
              ))}
            </div>
            {/* ORDER TOTAL */}
            <div>
              <p className="text-sm">Subtotal: ${orderDetails.subtotal}</p>
              <p className="text-sm">Discount: ${orderDetails.discount}</p>
              <p className="text-lg font-bold pt-3">
                Total: ${orderDetails.total}
              </p>
            </div>
          </div>
          <div className="justify-center">
            <button
              className=" btn glass mx-auto w-2/4 md:w-1/3 bg-green-200 text-white rounded-full hover:text-grey-300"
              onClick={() => navigate("/orders")}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmed;
