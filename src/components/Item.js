import "./Item.css";
import { useCart } from "../context/CartContext";
import { GoTrash } from "react-icons/go";

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, addQuantity, subTractQuantity } = useCart();
  // eslint-disable-next-line
  return (
    <div className="item-container">
      <div className="card">
      <img src={image} alt={id} />

        <div className="card-grid">
          <div className="product">
            <p className="name">ชื่อสินค้า : {name}</p>
            <p className="price">ราคา : {formatMoney(price)} บาท</p>
          </div>
        </div>

        <div className="card-grid">
          <div className="quantity">
            <button onClick={() => addQuantity(id)} className="increase">
              +
            </button>
            <input type="text" value={quantity} disabled />
            <button onClick={() => subTractQuantity(id)} className="decrease">
              -
            </button>
          </div>
        </div>

        <div className="card-grid">
          <div className="total-price">{formatMoney(quantity * price)} บาท</div>
        </div>

        <div className="card-grid">
          <button onClick={() => removeItem(id)} className="delete">
            <GoTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
