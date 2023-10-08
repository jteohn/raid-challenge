import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import LoadingIcon from "../components/LoadingIcon";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCartItems, setAllCartItems] = useState([]);
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

  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DB_API}/carts`
        );
        setAllCartItems(response.data.data);
      } catch (error) {
        console.log(`${error.response.data.msg}`);
      }
      setLoading(false);
    };
    getAllCartItems();
  }, []);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <div className="App flex">
      <div className="w-full flex flex-col mx-8">
        <div className="text-3xl font-semibold flex justify-center pt-8">
          All Products
        </div>
        <div className="flexjustify-center pt-8">Search</div>
        <div className="flex justify-center pt-8">
          <div>
            <ProductCard
              allProducts={allProducts}
              allCartItems={allCartItems}
              setAllCartItems={setAllCartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
