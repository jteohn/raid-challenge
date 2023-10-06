import InventoryTable from "../components/InventoryTable";

function Inventory() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold flex justify-start pl-16 pt-8">
        Stock Inventory
      </div>
      <InventoryTable />
    </div>
  );
}

export default Inventory;
