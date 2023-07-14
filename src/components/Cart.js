import Item from "./Item";
import { useCart } from "../context/CartContext";

export default function Cart() {
  // eslint-disable-next-line
  const { products, total, formatMoney } = useCart();

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดชำระรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตะกร้า"}
      </h2>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}
