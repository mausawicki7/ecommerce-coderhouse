import "../styles/ItemDetail.css";
import { UseCartContext } from "../context/CartContext";
import { useState } from "react";
import BuyButtons from "./BuyButtons";
import ItemCount from "./ItemCount";


function ItemDetail({ item }) {
  const [inputType, setInputType] = useState('itemCount');
  const { addToCart } = UseCartContext();

  function onAdd(quantity) {
    addToCart({...item, quantity});
    setInputType('buyButtons');
  };

  return (
    <div className="row">
      <div className="container">
        <div className="card-container">
          <input type="radio" name="colors-btn" id="color-1" checked />
          <input type="radio" name="colors-btn" id="color-2" />
          <input type="radio" name="colors-btn" id="color-3" />
          <input type="radio" name="colors-btn" id="color-4" />
          <div className="shoe-area">
            <div className="logo-div">
              <img src="src/assets/img/coder-logo.png" alt="" />
            </div>
            <div className="floating-div">
              <div className="shoe-1">
                <img src="src/assets/img/thumbnail.png" alt="red-nike" />
              </div>
            </div>
          </div>
          <div className="text-area">
            <div className="heading-area">
              <h2>{item.name}</h2>
              <h4>{item.stock} en stock</h4>
            </div>
              <h2 className="price-1">${item.price}</h2>

            <p className="paragraph-area">{item.description}</p>
            
            {inputType === 'itemCount' ?
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : 
            <BuyButtons/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
