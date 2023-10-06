import { RxDotsHorizontal } from "react-icons/rx";

function UpdateInventoryModal() {
  return (
    <>
      <button
        className="btn btn-xs rounded-xl"
        onClick={() => document.getElementById("edit_modal").showModal()}
      >
        <RxDotsHorizontal />
      </button>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Product Name: Banana</h3>
          <p className="py-4">Current Stock: 10</p>
          <div className="flex flex-row gap-2">
            <p>Update Quantity:</p>
            <input
              placeholder="Enter a value"
              className="border border-grey-200 w-2/4 rounded-md mb-6 pl-2"
            />
          </div>
          <form method="dialog" className="flex justify-center">
            <button className="btn btn-xs rounded-full bg-green-200 text-white px-4 h-8">
              Update Inventory
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
export default UpdateInventoryModal;
