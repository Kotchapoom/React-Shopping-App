import "./Header.css";
import { useCart } from "../context/CartContext";

export default function Header() {
  const {amount} = useCart()
  return (
    <header>
      <div className="header-container">
        <p>Shopping Application</p>
        <p>สินค้าในตะกร้า : {amount}</p>
      </div>
    </header>
  );
}
