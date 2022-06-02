import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Item.css";
import "../styles/ItemList.css";

function Item({ item }) {
  return (
    <>
      <div className="my-card">
        <Link to={`/${item.id}`}>
          <div className="img-place">
            <img id="card-img" src={item.image} alt={item.name} />
          </div>
        </Link>
        <div className="item-info">
          <h2>{item.name}</h2>
          <p>
            <span>${item.price}</span>
            <span> - </span>
            <span>{item.stock} en stock</span>
          </p>

          <NavLink className="btn" to={`/${item.id}`}>
            Ver detalle
          </NavLink>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Item;
