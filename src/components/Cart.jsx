//Chequear este codigo..
import { UseCartContext } from "../context/CartContext";
import { useState } from "react";
import "../styles/Cart.css";
import "../styles/ItemList.css";
import "../styles/Item.css";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const Cart = () => {
  const { orderId, createOrder, totalPrice, totalItems } = UseCartContext();
  const [orderSent, setOrderSent] = useState(false)

  console.log("items totales: " + totalItems);

  function sendOrderManage() {
    setOrderSent(true);
    createOrder();
}

  if(!totalItems){
  return (
    <>
      <div className="item-list-grid">
        
          {orderSent ? 
          <>
          <h1>Pedido enviado! Nro de pedido: {orderId} </h1>
          <Link to={"/"}><div className="btn"> Seguir comprando </div></Link>
          </>
          : <h3>No hay productos en el carrito.</h3>}
      
      </div>

    </>
  );
}
  return (
    <>
      <div className="cart-list">
          <CartList sendOrderManage={sendOrderManage} />
      </div>
      <div className="cart-total">
        <p>{`Total: ${totalPrice}`}</p>
      </div>
    </>
  );
};

export default Cart;
