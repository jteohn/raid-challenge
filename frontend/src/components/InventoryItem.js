import UpdateInventoryModal from "./UpdateInventoryModal";

function InventoryItem() {
  return (
    <>
      <tr>
        <td>Banana</td>
        <td>10</td>
        <td>
          <UpdateInventoryModal />
        </td>
      </tr>
      {/* 2nd ROW */}
      <tr>
        <td>Apple</td>
        <td>25</td>
        <td>
          <UpdateInventoryModal />
        </td>
      </tr>
    </>
  );
}
export default InventoryItem;
