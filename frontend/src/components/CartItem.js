import { RxCross2 } from "react-icons/rx";
import banana from "../assets/banana.jpg";

function CartItem() {
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div>Banana</div>
            </div>
          </div>
        </td>
        <td>2</td>
        <td>$4</td>
        <th className="tooltip" data-tip="remove">
          <button className="w-6 h-6 rounded-full hover:bg-grey-200 hover:text-white items-center">
            <RxCross2 className="w-4 h-4 mx-auto" />
          </button>
        </th>
      </tr>
      {/* 2nd Row */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div>Watermelon</div>
            </div>
          </div>
        </td>
        <td>1</td>
        <td>$6</td>
        <th className="tooltip" data-tip="remove">
          <button className="w-6 h-6 rounded-full hover:bg-grey-200 hover:text-white items-center">
            <RxCross2 className="w-4 h-4 mx-auto" />
          </button>
        </th>
      </tr>
      {/* 3rd Row */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div>Strawberry</div>
            </div>
          </div>
        </td>
        <td>1</td>
        <td>$6</td>
        <th className="tooltip" data-tip="remove">
          <button className="w-6 h-6 rounded-full hover:bg-grey-200 hover:text-white items-center">
            <RxCross2 className="w-4 h-4 mx-auto" />
          </button>
        </th>
      </tr>
    </>
  );
}
export default CartItem;
