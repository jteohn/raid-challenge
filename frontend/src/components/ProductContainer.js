import ProductCard from "./ProductCard";

function ProductContainer() {
  // const isMobile = window.innerWidth < 600;

  return (
    <>
      {/* {isMobile ? (
        <div className="w-full flex flex-col mx-8">
          <div className="text-3xl font-semibold flex justify-start pl-8 pt-8">
            All Products
          </div>
          <div className="flex justify-start pl-8 pt-8">Search</div>
          <div className="flex justify-center pt-8">
            <div>
              <ProductCard />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-2/3 flex flex-col mx-8">
          <div className="text-3xl font-semibold flex justify-start pl-8 pt-8">
            All Products
          </div>
          <div className="flex justify-start pl-8 pt-8">Search</div>
          <div className="flex justify-center pt-8">
            <div>
              <ProductCard />
            </div>
          </div>
        </div>
      )} */}

      <div className="w-full flex flex-col mx-8">
        <div className="text-3xl font-semibold flex justify-start pl-8 pt-8">
          All Products
        </div>
        <div className="flex justify-start pl-8 pt-8">Search</div>
        <div className="flex justify-center pt-8">
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
