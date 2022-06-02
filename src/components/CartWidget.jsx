import React from "react";
import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css"

function CartWidget() {
  const { totalItems } = UseCartContext();
  console.log("items totales: " + totalItems);
  return (
    <>
    {totalItems > 0 ? 
      <><span className="cart-widget">Productos en el carrito: {totalItems}</span>
          <Link to="/cart">
            <span className="material-symbols-outlined cart-icon">shopping_bag</span>
          </Link></>
     : 
      <span className="cart-widget">Productos en el carrito: 0</span>
  }

    
     </>
  );
 
}

export default CartWidget;
