import { useGlobalContext } from "./context";
import logo from "/logoLight.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <header className="navbar">
      <div className="navbar-center">
        <img className="logo" src={logo} alt="logo" />
        <div className="cart-icon">
          <FaShoppingCart />
          <div className="cart-amount">
            <p>{totalAmount}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
