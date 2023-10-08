import { useEffect, useState } from "react";
import axios from "axios";
import InventoryItem from "./InventoryItem";
import LoadingIcon from "./LoadingIcon";

function InventoryTable() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API}/products`
        );
        setAllProducts(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
      setLoading(false);
    };
    getAllProducts();
  }, []);

  if (loading) {
    return <LoadingIcon />;
  }

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
            <InventoryItem
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              setLoading={setLoading}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default InventoryTable;
