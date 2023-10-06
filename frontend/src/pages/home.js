import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="App flex">
      <div className="w-full flex flex-col mx-8">
        <div className="text-3xl font-semibold flex justify-center pt-8">
          All Products
        </div>
        <div className="flexjustify-center pt-8">Search</div>
        <div className="flex justify-center pt-8">
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
