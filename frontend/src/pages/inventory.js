import InventoryTable from "../components/InventoryTable";
import ButtonBack from "../components/ButtonBack";

function Inventory() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-start pl-16 pt-8">
        <ButtonBack />
      </div>
      <div className="text-3xl font-semibold flex justify-center">
        Stock Inventory
      </div>
      <InventoryTable />
    </div>
  );
}

export default Inventory;
