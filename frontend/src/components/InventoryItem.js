import { useState } from "react";
import axios from "axios";
import EditInventoryModal from "./EditInventoryModal";

function InventoryItem(props) {
  const { allProducts, setAllProducts, setLoading } = props;
  const [newQuantity, setNewQuantity] = useState(null);

  const handleUpdateInventory = async (e, productId) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_DB_API}/products/${productId}`,
        {
          quantity: newQuantity,
        }
      );
      setAllProducts(response.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
    setLoading(false);
  };

  const sortByProductId = allProducts.sort((a, b) => a.id - b.id);

  return (
    <>
      {sortByProductId.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.quantity}</td>
          <td>
            <EditInventoryModal
              product={product}
              newQuantity={newQuantity}
              setNewQuantity={setNewQuantity}
              handleUpdateInventory={handleUpdateInventory}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
export default InventoryItem;
