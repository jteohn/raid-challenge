import { RxDotsHorizontal } from "react-icons/rx";

function UpdateInventoryModal(props) {
  const { product, newQuantity, setNewQuantity, handleUpdateInventory } = props;

  return (
    <>
      <label
        htmlFor={`edit_modal/${product.id}`}
        className="btn btn-xs rounded-xl"
      >
        <RxDotsHorizontal />
      </label>
      <input
        type="checkbox"
        id={`edit_modal/${product.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <form method="dialog">
            <label
              htmlFor={`edit_modal/${product.id}`}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <h3 className="font-bold text-lg">Product Name: {product.name}</h3>
          <p className="py-4">Current Stock: {product.quantity}</p>
          <div className="flex flex-row gap-2">
            <p>Update Quantity:</p>
            <input
              className="border border-grey-200 w-2/4 rounded-md mb-6 pl-2"
              placeholder="Enter a value"
              value={newQuantity === null ? product.quantity : newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
            />
          </div>
          <form method="dialog" className="flex justify-center">
            <button
              className="btn btn-xs rounded-full bg-green-200 text-white px-4 h-8"
              onClick={(e) => handleUpdateInventory(e, product.id)}
            >
              Update Inventory
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default UpdateInventoryModal;
