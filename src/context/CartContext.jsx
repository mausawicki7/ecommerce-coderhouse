import React, { createContext, useContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext([]);

export function UseCartContext() {
  return useContext(CartContext)
}

//Estados y funciones globales para el carrito
export default function CartContextProvider ({children}) {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  /**
   * "isInCart" is a function that takes an item as an argument and returns true if the item is in the
   * cartList array.
   * @returns The function isInCart is returning a boolean value.
   */
  const isInCart = (id) => {
    return cartList.some((cartItem) => cartItem.id === id);
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {

      swal({
        title: "Ya agregaste este producto",
        text: "El producto ya se encuentra en tu carrito",
        icon: "warning",
        button: "OK",
      });
      let i = cartList.findIndex((cartItem) => cartItem.id === item.id);
      const newCartList = cartList;
      newCartList[i].quantity += item.quantity;
      updateCart(newCartList);

    } else {
      updateCart([...cartList, item]);
    }
  };

  /**
   * If the item in the cartList array has the same id as the item passed in, then return a new object
   * with the same properties as the cartItem, but with the qty property set to the current qty plus the
   * qty passed in.
   */
  const updateCart = (arr) => {
    setCartList(arr);
    setTotalPrice(
      arr.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0)
    );

    setTotalItems(arr.map((item) => item.quantity).reduce((a, b) => a + b, 0));
    console.log("Total items: " + totalItems);
    console.log("Total price: " + totalPrice);
  };

  const clearCart = () => {
    updateCart([]);
  };

  /**
   * Remove the item from the cartList array if the item's id does not match the id of the item passed
   * into the function.
   */
  const removeFromCart = (id) => {
    let i = cartList.findIndex(item => item.id === id);
    const newCartList = cartList;
    newCartList.splice(i,1);
    updateCart(newCartList);
  };

  return (
    /* Passing the state (cartList) and functions to the CartContext.Provider. */
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        removeFromCart,
        updateCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

