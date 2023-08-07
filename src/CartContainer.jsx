import SingleItem from "./SingleItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, removeItems, totalCost } = useGlobalContext();
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "4rem" }}>is empty</h2>;
  }

  return (
    <main>
      <div className="cart-container">
        {cartArray.map((item) => {
          const [id, cartItem] = item;

          return <SingleItem key={id} {...cartItem} />;
        })}
        <hr />
        <button className="remove-all" onClick={removeItems}>
          CLEAR CART
        </button>
        <h4 className="total-cost">total:${totalCost.toFixed(2)}</h4>
      </div>
    </main>
  );
};
export default CartContainer;
