import "./Item.css";
import { useCart } from "../context/CartContext";

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, addQuantity, subTractQuantity } = useCart();
  // eslint-disable-next-line
  return (
    <div className="item-container">
      <div className="card">
        <img src={image} alt={id} />
        <div className="product">
          <p className="name">ชื่อสินค้า : {name}</p>
          <p className="price">ราคา : {formatMoney(price)} บาท</p>
        </div>
        <div className="quantity">
          <button onClick={()=>addQuantity(id)}>+</button>
          <input type="text" value={quantity} disabled />
          <button onClick={()=>subTractQuantity(id)}>-</button>
        </div>
        <div className="total-price">{formatMoney(quantity * price)}</div>
        <button onClick={()=>removeItem(id)}>Delete</button>
      </div>
    </div>
  );
}
