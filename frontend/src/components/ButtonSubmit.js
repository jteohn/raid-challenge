function ButtonSubmit({ handleSubmitOrder }) {
  return (
    <button
      className="btn glass mx-auto w-2/4 md:w-1/3 bg-green-200 text-white rounded-full hover:text-grey-300"
      onClick={(e) => handleSubmitOrder(e)}
    >
      Submit Order
    </button>
  );
}

export default ButtonSubmit;
