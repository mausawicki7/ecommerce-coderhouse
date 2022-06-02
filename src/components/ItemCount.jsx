import React, { useState } from "react";
import "../styles/Button.css";
import "../styles/ItemList.css";

function ItemCount({ initial, stock, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const handleAdd = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1);
  };
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  function addItem() {
    onAdd(quantity);
  }

  return (
    <>
      <div className="item-count">
        <button className="plusminus" onClick={handleRemove}>
          -
        </button>
        <span>{quantity}</span>
        <button className="plusminus" onClick={handleAdd}>
          +
        </button>
        <br/><br/>
        <button className="btn" onClick={addItem}>
          {" "} Agregar al carrito {" "}
        </button>
        <br/><br/>
      </div>
    </>
  );
}

export default ItemCount;
