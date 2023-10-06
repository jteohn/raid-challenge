import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-xs w-16 h-8 bg-grey-200 text-white rounded-full hover:text-grey-300"
      onClick={() => navigate(-1)}
    >
      back
    </button>
  );
}

export default ButtonBack;
