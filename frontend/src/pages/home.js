import ProductContainer from "../components/ProductContainer";
// import OrderSummary from "../components/OrderSummary";

function Home() {
  // const isMobile = window.innerWidth < 600;

  return (
    <div className="App flex">
      <ProductContainer />
      {/* {isMobile ? <></> : <OrderSummary />} */}
    </div>
  );
}

export default Home;
