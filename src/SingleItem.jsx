import { useGlobalContext } from "./context";

const SingleItem = ({ id, amount, img, price, title }) => {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <article className="single-item">
      <div className="item-img">
        <img src={img} alt={title} />
      </div>
      <div className="single-item-desc">
        <h5 className="single-item-title">{title}</h5>
        <p className="price">price: ${price}</p>
      </div>
      <div className="amount-container">
        <button className="decrease" onClick={() => decrease(id)}>
          -
        </button>
        <span className="item-amount">{amount}</span>
        <button className="increase" onClick={() => increase(id)}>
          +
        </button>
      </div>
      <button className="remove" onClick={() => removeItem(id)}>
        remove
      </button>
    </article>
  );
};
export default SingleItem;
