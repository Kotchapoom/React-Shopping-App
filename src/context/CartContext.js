import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import CartReducer from "../reducer/CartReducer";

//สร้าง context
const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amount: 0,
};
export const CartProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(CartReducer, initState);

  function formatMoney(money) {
    //5000->5,000
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
  function removeItem(id){
     dispatch({type:"REMOVE",payload:id})
  }

  function addQuantity(id){
    dispatch({type:"ADD" , payload:id})
  }

  function subTractQuantity(id){
    dispatch({type:"SUBTRACT" , payload:id})
  }

  useEffect(()=>{
      dispatch({type:"CALCULATE_TOTAL"})
  },[state.products])

  return (
    <CartContext.Provider value={{ ...state, formatMoney, removeItem,addQuantity,subTractQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

//นำเอา context ไปใช้งานด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};
