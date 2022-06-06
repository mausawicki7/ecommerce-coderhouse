//Chequear este codigo..
import { UseCartContext } from "../context/CartContext";
import { useState } from "react";
import "../styles/Cart.css";
import "../styles/Item.css";
import CartList from "./CartList";

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
      <div className="cart-list">
        <div className="cart-item-empty">
          {orderSent ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h3>No hay productos en el carrito.</h3>}
        </div>
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
