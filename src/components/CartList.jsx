import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function CartList({sendOrderManage}) {
    const {cartList, clearCart, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <button className="btn" onClick={clearCart}>Vaciar pedido</button>
            <button className="btn" onClick={sendOrderManage}>Enviar pedido</button>
        </div>
    );
}