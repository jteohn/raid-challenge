import ProductContainer from "../components/ProductContainer";
// import HomeOrderSummary from "../components/HomeOrderSummary";

function Home() {
  // const isMobile = window.innerWidth < 600;

  return (
    <div className="App flex">
      <ProductContainer />
      {/* {isMobile ? <></> : <HomeOrderSummary />} */}
    </div>
  );
}

export default Home;
