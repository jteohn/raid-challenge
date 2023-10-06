import InventoryItem from "./InventoryItem";

function InventoryTable() {
  return (
    <div className="flex justify-center">
      <div className="overflow-y-auto bg-white w-3/4 rounded-xl shadow-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-grey-300">
              <th>Product Name</th>
              <th>Qty</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="text-grey-300">
            <InventoryItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default InventoryTable;
