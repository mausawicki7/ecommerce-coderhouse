import React, { createContext, useContext, useState } from "react";
import swal from "sweetalert";
import { addDoc, collection, getFirestore, where, query, documentId, writeBatch, getDocs } from "firebase/firestore";

const CartContext = createContext([]);

export function UseCartContext() {
  return useContext(CartContext)
}

//Estados y funciones globales para el carrito
export default function CartContextProvider ({children}) {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [orderId, setOrderId] = useState();

 

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

  function createOrder() {
    let order = {};

    order.buyer = {name: 'Mauricio', email: 'mau.sawicki@gmail.com', phone: '2994081375' };
    order.total = totalPrice;
    order.items = cartList.map(item => {
        const id = item.id;
        const name = item.name;
        const quantity = item.quantity;
        const newStock = item.stock-item.quantity;
        const price = item.price*item.quantity;
        return {id, name, quantity, newStock, price}
    });

    async function updateStocks() {
        const queryCollectionStocks = collection(db, 'items');
        const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
        const batch = writeBatch(db);

        await getDocs(queryUpdateStocks)
        .then(resp => resp.docs.forEach(
            res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
        ))
        .catch(err => console.log(err))

        batch.commit()
    }


    const db = getFirestore();
    const queryCollectionOrders = collection(db, 'orders');
    addDoc(queryCollectionOrders, order)
    .then(resp => setOrderId(resp.id))
    .then(() => updateStocks())
    .catch(err => console.log(err))
    .finally(() => clearCart())
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
        orderId,
        createOrder,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

