import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location pathname", location.pathname);

  const tabs = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Cart",
      route: "/cart",
    },
    {
      label: "Orders",
      route: "/orders",
    },
    {
      label: "Inventory",
      route: "/inventory",
    },
  ];

  return (
    <div className="flex justify-center pt-5">
      <div className="tabs tabs-boxed inset-shadow">
        {tabs.map((tab) => (
          <div
            key={tab.route}
            className={`tab ${
              location.pathname === tab.route
                ? "bg-grey-300 text-white"
                : "text-grey-300"
            }`}
            onClick={() => navigate(tab.route)}
          >
            {" "}
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Navbar;
